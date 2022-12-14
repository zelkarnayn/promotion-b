const commentController = require("../controllers/comment.controllers");
const router = require("./news.router");

router.get("/comment/:id", commentController.printComment)
router.post('/createComment', commentController.addComment)
router.delete('/deleteComment', commentController.deleteComment)

module.exports = router;