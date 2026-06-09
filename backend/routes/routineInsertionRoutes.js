const express =
  require("express");

const router =
  express.Router();

const auth =
  require("../middleware/authMiddleware");

const controller =
  require(
    "../controllers/routineInsertionController"
  );

router.get(
  "/",
  auth,
  controller.getInsertions
);

router.patch(
  "/:id/items/:itemId",
  auth,
  controller.completeItem
);

module.exports = router;