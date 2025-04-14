const express = require('express');
const router = express.Router();

router.get('/users/:id/orders', (req, res) => {
    const userId = req.params.id;
    console.log(userId);
});

module.exports = router;
