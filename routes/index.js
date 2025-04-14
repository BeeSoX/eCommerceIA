const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'SITE PRESTASHOP', description: 'copyright ??'})
});

router.get('/about', (req, res) => {
    res.send('À propos');
});

module.exports = router;
