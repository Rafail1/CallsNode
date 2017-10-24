const express = require('express');
const router = express.Router();

router.post('/add', function(req, res) {
    console.log(req.body);
    res.send('2r3r4gde5y');
});

module.exports = router;
