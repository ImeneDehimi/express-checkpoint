const express = require("express");
const router = express.Router();
const {checkTime} = require('./../middleware/check-time')

router.get('/', checkTime,(req, res) => {
    res.render('home');
});
router.get('/services', checkTime,(req, res) => {
    res.render('services');
});
router.get('/contact', checkTime,(req, res) => {
    res.render('contact');
});

module.exports = router;