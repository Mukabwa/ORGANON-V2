const express = require("express");

const router =
  express.Router();

const auth =
  require("../middleware/authMiddleware");

const definitionController =
  require("../controllers/definitionController");

// CREATE
router.post(
  "/",
  auth,
  definitionController.createDefinition
);

// GET ALL
router.get(
  "/",
  auth,
  definitionController.getDefinitions
);

// GET ONE
router.get(
  "/:id",
  auth,
  definitionController.getDefinition
);

// UPDATE
router.patch(
  "/:id",
  auth,
  definitionController.updateDefinition
);

// DELETE
router.delete(
  "/:id",
  auth,
  definitionController.deleteDefinition
);

module.exports = router;