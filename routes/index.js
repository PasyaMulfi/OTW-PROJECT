const express = require('express')
const auth = require('./authRoute')
const user = require('./userRoutes')
// const app = require('..')
const router = express.Router()



router.get(`/api/v1/`, (_req, res) => {
    res.json({
        "message": "Hello World"
    })
})

router.use(auth)
router.use(user)

module.exports = router;