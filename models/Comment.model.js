const { default: mongoose } = require("mongoose");

const commentShema = mongoose.Schema({
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
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
    data: {
        type: Date,
        default: Date.now
    }
})
const Comment = mongoose.model("Comment", commentShema);
module.exports = Comment;