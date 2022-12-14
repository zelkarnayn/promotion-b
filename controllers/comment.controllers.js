const Comment = require("../models/Comment.model")

const commentController = {
    addComment: async (req, res) => {
        try {
            const { idAuthor, text, newsId } = req.body
            const comment = await Comment.create({
                idAuthor,
                text,
                newsId
            })
            res.json(comment)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteComment: async (req, res) => {
        try {
            const comment = await Comment.findByIdAndDelete(req.params.id, {})
            res.json(comment)
        } catch (error) {
            res.json(error.message)
        }
    },
    printComment: async (req, res) => {
        try {
            const comment = await Comment.find({newsId:req.params.id})
            res.json(comment)
        } catch (error) {
            res.json(error.message)
        }
    }

}
module.exports = commentController