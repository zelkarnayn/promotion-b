const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    roles: [{type: String, ref: 'Role'}],
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
})

const User = mongoose.model('User', UserSchema)
module.exports = User