const express = require('express');
const router = express.Router();

// Admin-specific routes
router.get('/', (req, res) => {
    res.render('admin', { title: 'Admin Panel' });
});

module.exports = router;
