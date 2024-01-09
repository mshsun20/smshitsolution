const AccModel = require('../models/accModel')
const bcrypt = require('bcrypt')

let saltRound = 8

module.exports = {
    create: (req, res) => {
        // console.log(req.body)
        const {accunam, accphn, acceml, accpass, accnam, accadhrn, accaddr, acccntry, accstate, accdist, acccty, accloc, accpin, accgen, accdesig, acccomp, accdept, accexp, accqual, accuniv, accclg, accgrade} = req.body
        // console.log(accpass)

        try {
            bcrypt.genSalt(saltRound, (err, salt) => {
                bcrypt.hash(accpass, salt, async (err, hashpass) => {
                    // console.log(hashpass)
                    const Acc = await AccModel.create({accunam, accphn, acceml, accpass:hashpass, accnam, accadhrn, accaddr, acccntry, accstate, accdist, acccty, accloc, accpin, accgen, accdesig, acccomp, accdept, accexp, accqual, accuniv, accclg, accgrade})
                    if (Acc) {
                        res.json({success:`Account Created Successfully.`, statuscode:220})
                    }
                    else {
                        res.json({error:`Account Creation Failure...!`, statuscode:422})
                    }
                })
            })
        } catch (error) {
            console.error(error)
        }
    },
    login: async (req, res) => {
        // console.log(req.body)
        const {accunam, accpass} = req.body

        try {
            const Acc = await AccModel.findOne({accunam})
            if (!Acc) {
                res.json({error:`Username Doesn't Exist...!`, statuscode:422})
            }
            else {
                bcrypt.compare(accpass, Acc.accpass, (err, chckpass) => {
                    // console.log(chckpass)
                    if (chckpass===true) {
                        req.session.admacc = Acc
                        res.json({success:`Account Logged In Successfully.`, statuscode:220, admin:req.session.admacc})
                    }
                    else {
                        res.json({error:`Wrong Password entered...!`, statuscode:423})
                    }
                })
            }
        } catch (error) {
            console.error(error)
        }
    },
    sess: async (req, res) => {
        // console.log(req.session.admacc)
        if (req.session.admacc) {
            res.json({message:'Already Logged In.', statuscode:200, admin:req.session.admacc})
        }
        else {
            res.json({message:'Not Yet Loged In...!', statuscode:300})
        }
    },
    read: async (req, res) => {},
    update: async (req, res) => {},
    delete: async (req, res) => {}
}