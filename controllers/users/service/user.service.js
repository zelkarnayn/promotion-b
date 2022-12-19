const User = require("../../../models/users/User.model")
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail.service')
const tokenService = require("./token.service")
const UserDto = require("../dtos/user.dto")
const ApiError = require("../extensions/api.error")

class userService {
    async registration (email, password) {
        const candidate = await User.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже зарегистрирован`)
        }
        const activationLink = uuid.v4()
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await User.create({email, password: hashPassword, activationLink})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/activate/${activationLink}`)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }
    async activate (activationLink) {
        const user = await User.findOne({activationLink})
        if (!user) {
            throw ApiError.BadRequest('Некорректная ссылка активации')
        }
        user.isActivated = true
        await user.save()
    }

    async login (email, password) {
        const user = await User.findOne({email})
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким e-mail не найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}
    }

    async logout (refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh (refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError()
        }
        const user = await User.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}
    }
    async getAllUsers () {
        const users = await User.find()
        return users
    }
}

module.exports = new userService()