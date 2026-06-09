const Routine =
  require("../models/Routine");

// CREATE
exports.createRoutine =
  async (req, res) => {

    try {

      const routine =
        await Routine.create({

          ...req.body,

          ownerId:
            req.userId,
        });

      res.status(201).json(
        routine
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// GET ALL
exports.getRoutines =
  async (req, res) => {

    try {

      const routines =
        await Routine.find({

          ownerId:
            req.userId,

          archived:
            false,
        }).sort({
          createdAt: -1,
        });

      res.json(routines);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// GET ONE
exports.getRoutine =
  async (req, res) => {

    try {

      const routine =
        await Routine.findOne({

          _id:
            req.params.id,

          ownerId:
            req.userId,
        });

      if (!routine) {

        return res.status(404).json({
          message:
            "Routine not found",
        });
      }

      res.json(routine);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// UPDATE
exports.updateRoutine =
  async (req, res) => {

    try {

      const routine =
        await Routine.findOneAndUpdate(

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

      if (!routine) {

        return res.status(404).json({
          message:
            "Routine not found",
        });
      }

      res.json(routine);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// ARCHIVE
exports.archiveRoutine =
  async (req, res) => {

    try {

      const routine =
        await Routine.findOneAndUpdate(

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

      if (!routine) {

        return res.status(404).json({
          message:
            "Routine not found",
        });
      }

      res.json({
        message:
          "Routine archived",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};