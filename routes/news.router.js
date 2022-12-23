const { Router } = require('express'); 
const newsController = require('../controllers/news.controllers');
const router = Router()

router.get("/news", newsController.getNews)
router.post('/createNews', newsController.createNews)
router.delete('/News/:id', newsController.deleteNews)



module.exports = router;