const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
});

router.post('/home', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
});






module.exports = router;