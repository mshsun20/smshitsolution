const mongoose = require('mongoose')

const url = 'mongodb+srv://mshsun20:msh.s31@smshitdb.xuyefx2.mongodb.net/?retryWrites=true&w=majority'

const conn = async () => {
    try {
        const reslt = await mongoose.connect(url)
        if (reslt) {
            console.log(`DB Successfully Connected...`)
        }
    } catch (error) {
        console.error(error)
    }
}
conn()
