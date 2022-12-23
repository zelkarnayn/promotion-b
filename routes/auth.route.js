const { Router } = require('express')
const usersController = require('../controllers/users/users.controller')
const router = Router()
const { body } = require('express-validator')
const authMiddleware = require('../controllers/users/middlewares/auth.middleware')
const rolesMiddleware = require('../controllers/users/middlewares/roles.middleware')

router.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 32}),
    usersController.registration)
router.post('/login', usersController.login)
router.post('/logout', usersController.logout)
router.post('/makemanager', rolesMiddleware(['ADMIN']), usersController.makeManager)
router.get('/activate/:link', usersController.activate)
router.get('/refresh', usersController.refresh)
router.get('/users', authMiddleware, usersController.getUsers)

module.exports = router