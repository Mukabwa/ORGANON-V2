const express = require("express");

const router = express.Router();

const authController =
  require("../controllers/authController");

const authMiddleware =
  require("../middleware/authMiddleware");

// public
router.post(
  "/register",
  authController.register
);

router.post(
  "/login",
  authController.login
);

// protected
router.get(
  "/me",
  authMiddleware,
  authController.getMe
);

module.exports = router;