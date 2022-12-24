const News = require("../models/News.model")


const newsController = {
    getNews: async (req, res) => {
        try {
            const news = await News.find()
            res.json(news)
        } catch (error) {
            res.json(error.message)
        }
    },

    createNews: async (req, res) => {
        try {
            const { heading, text, comment } = req.body;
            const news = await News.create({
                heading,
                image: req.file.path,
                text,
                comment
            })
            res.json(news)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteNews: async (req, res) => {
        try {
            const news = await News.findByIdAndDelete(req.params.id, {})
            res.json(news)
        } catch (error) {
            res.json(error.message)
        }
    },
    addImage: async (req, res) => {
        try {
            if (req.files) {
                res.json(req.files)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    },
}

module.exports = newsController;