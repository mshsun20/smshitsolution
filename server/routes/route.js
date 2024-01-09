const express = require('express')
const router = express.Router()
const session = require('express-session')
const AccController = require('../controllers/accController')
const UsrController = require('../controllers/usrController')


// ___________________________________________________________________________________________
// Server ping test
// -------------------------------------------------------------------------------------------

router.get('/checkstat', (req, res) => {
    res.json({message:`Server is Online...`, statuscode:200})
})

// ___________________________________________________________________________________________
// ===========================================================================================



// create
// -------------------------------------------------------------------
// admin site
router.post('/admin/create', AccController.create)
router.post('/admin/login', AccController.login)
// client site
router.post('/client/register', UsrController.register)
router.post('/client/login', UsrController.login)


// read
// -------------------------------------------------------------------
// admin site
router.get('/admin')
router.get('/admin/sess', AccController.sess)
// client site
router.get('/client/fetch', UsrController.read)
router.get('/client/edit/:id', UsrController.edit)
router.get('/client/sess', UsrController.sess)


// update
// -------------------------------------------------------------------
// admin site
router.put('/admin')
// client site
router.put('/client')
router.put('/client/update/:id', UsrController.update)


// delete
// -------------------------------------------------------------------
// admin site
router.delete('/admin')
// client site
router.delete('/client')
router.delete('/client/remove/:id', UsrController.delete)



module.exports = router