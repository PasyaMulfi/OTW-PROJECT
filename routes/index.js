'use strict'
const express = require('express')
const router = express()

// Import kategoriRoute dan produkRoute
const artikelRoute = require('./artikelRoute');
const eventRoute = require('./eventRoute');
const galeriRoute= require('./galeriRoute')
const authRoute = require('./authRoute');
const depaneventRoute = require('./depaneventRoute')
const depanartikelRoute = require('./depanartikelRoute')

router.get(`/api/v1/`, (_req, res) => {
    res.json({
        "message": "Welcome to restfullapi"
    })
})

router.use(artikelRoute);
router.use(eventRoute);
router.use(galeriRoute);
router.use(depaneventRoute);
router.use(depanartikelRoute)
router.use(authRoute);

module.exports = router