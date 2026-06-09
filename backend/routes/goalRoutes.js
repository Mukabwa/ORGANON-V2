const express =
  require("express");

const router =
  express.Router();

const auth =
  require("../middleware/authMiddleware");

const controller =
  require(
    "../controllers/goalController"
  );

router.post(
  "/",
  auth,
  controller.createGoal
);

router.get(
  "/",
  auth,
  controller.getGoals
);

router.get(
  "/:id",
  auth,
  controller.getGoal
);

router.patch(
  "/:id",
  auth,
  controller.updateGoal
);

router.delete(
  "/:id",
  auth,
  controller.archiveGoal
);

module.exports = router;