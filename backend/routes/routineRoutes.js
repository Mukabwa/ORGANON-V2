const express =
  require("express");

const router =
  express.Router();

const auth =
  require("../middleware/authMiddleware");

const routineController =
  require(
    "../controllers/routineController"
  );

const insertionController =
  require(
    "../controllers/routineInsertionController"
  );

// CREATE ROUTINE
router.post(
  "/",
  auth,
  routineController.createRoutine
);

// GET ALL ROUTINES
router.get(
  "/",
  auth,
  routineController.getRoutines
);

// GET ONE ROUTINE
router.get(
  "/:id",
  auth,
  routineController.getRoutine
);

// UPDATE ROUTINE
router.patch(
  "/:id",
  auth,
  routineController.updateRoutine
);

// ARCHIVE ROUTINE
router.delete(
  "/:id",
  auth,
  routineController.archiveRoutine
);

// INSERT ROUTINE INTO PLANNER
router.post(
  "/:id/insert",
  auth,
  insertionController.insertRoutine
);

module.exports = router;