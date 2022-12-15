const Fighter = require("../models/Fighter.model")

module.exports.fightersController = {
    addFighterImage: async (req, res) => {
        try {
            if(req.file.path) {
                res.json(req.file.path)
            }
        } catch (error) {
            res.json({error: error.message})
        }
    },
    addFighter: async (req, res) => {
        try {
            const fighter = await Fighter.create(req.body)
            res.json(fighter)
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    getFighters: async (req, res) => {
        try {
            const fighter = await Fighter.find()
            res.json(fighter)
        } catch (error) {
            res.json({ error: error.message })
        }
    }
}