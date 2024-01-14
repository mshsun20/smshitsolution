const mongoose = require('mongoose')

const AccSchema = mongoose.Schema({
    accunam: {
        type: String,
        required: true,
        unique: true
    },
    accphn: {
        type: String,
        required: true,
        unique: true
    },
    acceml: {
        type: String,
        required: true,
        unique: true
    },
    accpass: {
        type: String,
        required: true
    },
    accnam: {
        type: String,
        required: true
    },
    accadhrn: {
        type: String,
        required: true,
        unique: true
    },
    accaddr: {
        type: String,
        required: true
    },
    acccntry: {
        type: String
    },
    accstate: {
        type: String
    },
    accdist: {
        type: String
    },
    acccty: {
        type: String
    },
    accloc: {
        type: String
    },
    accpin: {
        type: String,
        required: true
    },
    accgen: {
        type: String,
    },
    accdesig: {
        type: String,
        required: true
    },
    acccomp: {
        type: String
    },
    accdept: {
        type: String
    },
    accexp: {
        type: String,
        required: true
    },
    accqual: {
        type: String,
        required: true
    },
    accuniv: {
        type: String
    },
    accclg: {
        type: String
    },
    accgrade: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Account', AccSchema)