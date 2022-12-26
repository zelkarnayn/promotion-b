const { Router } = require("express");
const commentController = require("../controllers/comment.controllers");

const router = Router()

router.get("/comment/:id", commentController.printComment)
router.get("/comments", commentController.getCommentaries)
router.post('/createComment', commentController.addComment)
router.delete('/deleteComment/:id', commentController.deleteComment)

module.exports = router;