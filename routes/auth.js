const express = require("express");
const authMiddleware = require("../middlewares/auth");
const validateMiddleware = require("../middlewares/validate");
const authController = require("../controllers/auth");
const { registerValidator } = require("../validators/register");
const { loginValidator } = require("../validators/login");

const router = express.Router();

router
  .route("/register")
  .post(registerValidator(), validateMiddleware, authController.register);
router.route("/login").post(loginValidator() , validateMiddleware ,authController.login);
router.route("/getMe").get(authMiddleware, authController.getMe);

module.exports = router;
