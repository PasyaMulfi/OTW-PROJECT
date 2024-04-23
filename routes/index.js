'use strict'
const express = require('express')
const router = express()

// Import kategoriRoute dan produkRoute
const artikelRoute = require('./artikelRoute');
const authRoute = require('./authRoute');


router.get(`/api/v1/`, (_req, res) => {
    res.json({
        "message": "Welcome to restfullapi"
    })
})

router.use(artikelRoute);
router.use(authRoute);

module.exports = router