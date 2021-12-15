const express = require('express');
const router = express.Router();

const userController = require('../controllers/User.controller')

router.post('/register', userController.register)

router.get('/admin', (req, res) => {
    res.send(req.body)
})

module.exports = router