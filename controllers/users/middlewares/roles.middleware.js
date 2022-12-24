const jwt = require('jsonwebtoken')
const ApiError = require('../extensions/api.error')
const tokenService = require('../service/token.service')

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }

        try {
            const authorizationHeader = req.headers.authorization
            if (!authorizationHeader) {
                return next(ApiError.UnauthorizedError())
            }
            const accessToken = authorizationHeader.split(' ')[1]
            if (!accessToken) {
                return next(ApiError.UnauthorizedError())
            }
            const userData = tokenService.validateAccessToken(accessToken)
            if (!userData) {
                return next(ApiError.UnauthorizedError())
            }
            const {roles: userRoles} = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET)
            let hasRole = false
            userRoles.forEach(role => {
                if (roles.includes(role)) {
                  hasRole = true  
                }
            });
            if (!hasRole) {
                return res.status(403).json({message: 'У Вас нет доступа'})
            }
            req.user = userData
            next()
        } catch (error) {
            return next(ApiError.UnauthorizedError())
        }
    }
}