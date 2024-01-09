const mongoose = require('mongoose')

const UsrSchema = mongoose.Schema({
    usrunam: {
        type: String,
        required: true,
        unique: true
    },
    usrphn: {
        type: String,
        required: true,
        unique: true
    },
    usreml: {
        type: String,
        required: true,
        unique: true
    },
    usrpass: {
        type: String,
        required: true
    },
    usrfnam: {
        type: String,
        required: true
    },
    usraddr: {
        type: String
    },
    usrpin: {
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', UsrSchema)