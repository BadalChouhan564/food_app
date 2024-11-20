const express = require('express')
const { testUserController } = require('../controllers/testController')


// Router Object
const router =  express.Router()


//routes  GET | POST | DELETE | UPDATE
router.get('/test-user',testUserController) 



//Export
module.exports = router
