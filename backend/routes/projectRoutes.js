const express =
  require("express");

const router =
  express.Router();

const auth =
  require("../middleware/authMiddleware");

const controller =
  require(
    "../controllers/projectController"
  );

router.post(
  "/",
  auth,
  controller.createProject
);

router.get(
  "/",
  auth,
  controller.getProjects
);

router.get(
  "/:id",
  auth,
  controller.getProject
);

router.patch(
  "/:id",
  auth,
  controller.updateProject
);

router.delete(
  "/:id",
  auth,
  controller.archiveProject
);

module.exports = router;
