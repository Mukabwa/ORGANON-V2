const Goal =
  require("../models/Goal");

// CREATE
exports.createGoal =
  async (req, res) => {

    try {

      const goal =
        await Goal.create({

          ...req.body,

          ownerId:
            req.userId,
        });

      res.status(201).json(
        goal
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// GET ALL
exports.getGoals =
  async (req, res) => {

    try {

      const goals =
        await Goal.find({

          ownerId:
            req.userId,

          archived:
            false,
        }).sort({
          createdAt: -1,
        });

      res.json(goals);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// GET ONE
exports.getGoal =
  async (req, res) => {

    try {

      const goal =
        await Goal.findOne({

          _id:
            req.params.id,

          ownerId:
            req.userId,
        });

      if (!goal) {

        return res.status(404).json({
          message:
            "Goal not found",
        });
      }

      res.json(goal);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// UPDATE
exports.updateGoal =
  async (req, res) => {

    try {

      const goal =
        await Goal.findOneAndUpdate(

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

      if (!goal) {

        return res.status(404).json({
          message:
            "Goal not found",
        });
      }

      res.json(goal);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// ARCHIVE
exports.archiveGoal =
  async (req, res) => {

    try {

      const goal =
        await Goal.findOneAndUpdate(

          {
            _id:
              req.params.id,

            ownerId:
              req.userId,
          },

          {
            archived:
              true,
          },

          {
            new: true,
          }
        );

      if (!goal) {

        return res.status(404).json({
          message:
            "Goal not found",
        });
      }

      res.json({
        message:
          "Goal archived",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};