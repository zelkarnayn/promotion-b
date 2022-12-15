const { Router } = require('express')
const { categoriesController } = require('../controllers/categories.controller')
const router = Router()

router.get('/category', categoriesController.getCategories)
router.post('/category', categoriesController.addCategory)

module.exports = router