const { Router } = require('express'); 
const newsController = require('../controllers/news.controllers');
const router = Router()
const postImageMiddleware = require ('../middleware/post.image')

router.get("/news", newsController.getNews)
router.post('/createNews', newsController.createNews)
router.delete('/deleteNews', newsController.deleteNews)
router.post('/postimage', postImageMiddleware.array('post', 5), newsController.addImage)

module.exports = router;