const express = require('express')
const { registerConteoller, loginController } = require('../controllers/authControllers')

const router = express.Router()

//routes
//REGISTER || POST
router.post('/register',registerConteoller)

// LOGIN || POST
router.post('/login',loginController)

module.exports = router