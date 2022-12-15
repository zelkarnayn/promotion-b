const mongoose = require('mongoose')

const newsShema = mongoose.Schema({
    heading : {
        type: String,
        require: true
    },
    image: {
       type: String,
       require: true
    },
    text: {
        type: String,
        require: true
    }, 
    comment: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Comment"
    }
})
const News = mongoose.model("News", newsShema);

module.exports = News;