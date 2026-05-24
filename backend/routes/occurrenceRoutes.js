const express = require("express");

const router =
  express.Router();

const auth =
  require("../middleware/authMiddleware");

const occurrenceController =
  require("../controllers/occurrenceController");

// COMPLETE
router.patch(
  "/:id/complete",
  auth,
  occurrenceController.completeOccurrence
);

// SKIP
router.patch(
  "/:id/skip",
  auth,
  occurrenceController.skipOccurrence
);

// CANCEL
router.patch(
  "/:id/cancel",
  auth,
  occurrenceController.cancelOccurrence
);

// NOTES
router.patch(
  "/:id/notes",
  auth,
  occurrenceController.addNotes
);

router.patch(
  "/:id/override",
  auth,
  occurrenceController.overrideOccurrence
);

module.exports = router;