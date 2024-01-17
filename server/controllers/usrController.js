const UsrModel = require('../models/usrModel')
const bcrypt = require('bcrypt')

let saltRound = 8

module.exports = {
    register: async (req, res) => {
        // console.log(req.body)
        const {usrunam, usrphn, usreml, usrpass, usrfnam, usraddr, usrpin} = req.body
        // console.log(usrpass)

        try {
            const UsrExst = await UsrModel.findOne({usrunam})
            if (UsrExst) {
                res.json({error:"Username already exists...!", statuscode:401})
            }
            else {
                bcrypt.genSalt(saltRound, (err, salt) => {
                    bcrypt.hash(usrpass, salt, async (err, hashpass) => {
                        // console.log(hashpass)
                        const Usr = await UsrModel.create({usrunam, usrphn, usreml, usrpass:hashpass, usrfnam, usraddr, usrpin})
                        if (Usr) {
                            res.json({success:`User Registered Successfully.`, statuscode:220})
                        }
                        else {
                            res.json({error:`User Registration Failed...!`, statuscode:422})
                        }
                    })
                })
            }
        } catch (error) {
            console.error(error)
        }
    },
    login: async (req, res) => {
        // console.log(req.body)
        const {usrunam, usrpass} = req.body

        try {
            const Usr = await UsrModel.findOne({usrunam})
            if (!Usr) {
                res.json({error:`Username Doesn't Exist...!`, statuscode:401})
            }
            else {
                bcrypt.compare(usrpass, Usr.usrpass, (err, chckpass) => {
                    // console.log(chckpass)
                    if (chckpass===true) {
                        req.session.usracc = Usr
                        res.json({success:`User Logged In Successfully.`, statuscode:220, user:req.session.usracc})
                    }
                    else {
                        res.json({error:`Wrong Password entered...!`, statuscode:422})
                    }
                })
            }
        } catch (error) {
            console.error(error)
        }
    },
    sess: async (req, res) => {
        // console.log(req.session.usracc)
        if (req.session.usracc) {
            res.json({message:'Already Logged In.', statuscode:200, user:req.session.usracc})
        }
        else {
            res.json({message:'Not Yet Loged In...!', statuscode:300})
        }
    },
    read: async (req, res) => {
        try {
            const Usr = await UsrModel.find()
            res.json({message:`All User details fetched.`, statuscode:220, data:Usr})
        } catch (error) {
            console.error(error)
        }
    },
    edit: async (req, res) => {
        const uid = req.params.id
        try {
            const Usr = await UsrModel.findById(uid)
            res.json({message:`User details fetched.`, statuscode:220, data:Usr})
        } catch (error) {
            console.error(error)
        }
    },
    update: async (req, res) => {
        const uid = req.params.id
        const {usrunam, usrphn, usreml, usrfnam, usraddr, usrpin} = req.body
        try {
            const Usr = await UsrModel.findByIdAndUpdate(uid, {usrunam, usrphn, usreml, usrfnam, usraddr, usrpin})
            if (Usr) {
                res.json({success:`User details of : "${usrfnam}" Updated.`, statuscode:220})
            }
            else {
                res.json({error:`User Update Failed of : "${usrfnam}" ...!`, statuscode:420})
            }
        } catch (error) {
            console.error(error)
        }
    },
    delete: async (req, res) => {
        const uid = req.params.id
        try {
            const Usr = await UsrModel.findByIdAndDelete(uid)
            res.json({message:`User: "${Usr.usrfnam}" Removed Successfully`, statuscode:220})
        } catch (error) {
            console.error(error)
        }
    }
}