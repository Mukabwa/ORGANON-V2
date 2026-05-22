const express = require("express");

const router = express.Router();

const auth =
  require("../middleware/authMiddleware");

const timelineController =
  require(
    "../controllers/timelineController"
  );

// DAILY
router.get(
  "/daily",
  auth,
  timelineController.getDailyTimeline
);

// WEEKLY
router.get(
  "/weekly",
  auth,
  timelineController.getWeeklyTimeline
);

// MONTHLY
router.get(
  "/monthly",
  auth,
  timelineController.getMonthlyTimeline
);

module.exports = router;