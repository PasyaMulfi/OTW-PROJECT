const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/api/v1/login", authController.login);
router.post("/api/v1/register", authController.register);

module.exports = router;