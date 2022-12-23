const { default: mongoose } = require("mongoose");

const commentShema = mongoose.Schema({
    idAuthor: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        default: "Анонимный пользователь"
    },
    text: {
        type: String,
        require: true,
    },
    newsId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "News",
        require: true,
    },
    user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId,
    },
    data: {
        type: Date,
        default: Date.now
    }
})
const Comment = mongoose.model("Comment", commentShema);
module.exports = Comment;