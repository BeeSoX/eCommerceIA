const express = require('express');
const router = express.Router();

router.post('/orders', (req, res) => {
    console.log('some orders');
});

module.exports = router;
