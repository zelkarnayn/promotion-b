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
        ref: "News"
    }
})
const Comment = mongoose.model("Comment", commentShema);
module.exports = Comment;