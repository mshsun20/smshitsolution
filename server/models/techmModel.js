const mongoose = require('mongoose')

const TechmSchema = mongoose.Schema({
    tname: {
        type: String,
        required: true
    },
    tinfo: {
        type: String
    },
    srvc: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Technology', TechmSchema)