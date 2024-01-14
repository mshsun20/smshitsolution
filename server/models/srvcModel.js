const mongoose = require('mongoose')

const SrvcSchema = mongoose.Schema({
    sname: {
        type: String,
        required: true
    },
    sdtl: {
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Service', SrvcSchema)