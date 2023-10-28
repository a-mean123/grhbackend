const express = require('express');
const router = express.Router();
const {
    signin,
    update
} = require('../controllers/admin');



router.post('/login', signin);
router.put('/update/:id', update);


module.exports = router;