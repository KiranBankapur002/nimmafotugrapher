const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');  // Looks for views/index.ejs
});

router.get('/gallery', (req, res) => {
    res.render('gallery');
});


module.exports = router;
