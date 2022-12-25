const Comment = require("../models/Comment.model")

const commentController = {
    addComment: async (req, res) => {
        try {
            const { text, newsId, user } = req.body
            const comment = await Comment.create({
                // id из req.user / берем ид из токена
                // author: req.user,

                //временно
                author: req.body.author,

                text,
                newsId, 
                user
            })           
            const comments = await Comment.findById(comment._id).populate('author')

            res.json(comments)
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
    },
    getCommentaries: async (req, res) => {
        try {
            const comments = await Comment.find().populate('author')
            res.json(comments)
        } catch (error) {
            res.json(error.message)
        }
    },

}
module.exports = commentController