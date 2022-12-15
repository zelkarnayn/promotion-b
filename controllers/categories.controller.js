const Category = require("../models/Category.model")

module.exports.categoriesController = {
    getCategories: async (req, res) => {
        try {
            const category = await Category.find()
            res.json(category)
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    addCategory: async (req, res) => {
        try {
            const category = await Category.create(req.body)
            res.json(category)
        } catch (error) {
            res.json({ error: error.message })
        }
    }
}