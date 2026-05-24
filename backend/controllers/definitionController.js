const Definition =
  require("../models/Definition");

// CREATE
exports.createDefinition =
  async (req, res) => {

    try {

      const definition =
        await Definition.create({

          ...req.body,

          ownerId:
            req.userId,
        });

      res.status(201).json(
        definition
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// GET ALL
exports.getDefinitions =
  async (req, res) => {

    try {

      const definitions =
        await Definition.find({

          ownerId:
            req.userId,

          "state.deleted":
            false,
        }).sort({
          createdAt: -1,
        });

      res.json(definitions);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// GET ONE
exports.getDefinition =
  async (req, res) => {

    try {

      const definition =
        await Definition.findOne({

          _id: req.params.id,

          ownerId:
            req.userId,
        });

      if (!definition) {

        return res.status(404).json({
          message:
            "Definition not found",
        });
      }

      res.json(definition);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// UPDATE
exports.updateDefinition =
  async (req, res) => {

    try {

      const definition =
        await Definition.findOneAndUpdate(

          {
            _id:
              req.params.id,

            ownerId:
              req.userId,
          },

          req.body,

          {
            new: true,
          }
        );

      if (!definition) {

        return res.status(404).json({
          message:
            "Definition not found",
        });
      }

      res.json(definition);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// DELETE
exports.deleteDefinition =
  async (req, res) => {

    try {

      const definition =
        await Definition.findOneAndUpdate(

          {
            _id:
              req.params.id,

            ownerId:
              req.userId,
          },

          {
            "state.deleted":
              true,
          },

          {
            new: true,
          }
        );

      if (!definition) {

        return res.status(404).json({
          message:
            "Definition not found",
        });
      }

      res.json({
        message:
          "Definition deleted",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};