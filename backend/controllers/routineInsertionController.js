const RoutineInsertion =
  require(
    "../models/RoutineInsertion"
  );

const {
  insertRoutine,
} = require(
  "../services/routineService"
);

// INSERT ROUTINE
exports.insertRoutine =
  async (req, res) => {

    try {

      const insertion =
        await insertRoutine(

          req.userId,

          req.params.id,

          req.body.localDate,

          req.body.time
        );

      res.status(201).json(
        insertion
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// GET INSERTIONS
exports.getInsertions =
  async (req, res) => {

    try {

      const insertions =
        await RoutineInsertion.find({

          ownerId:
            req.userId,
        })
        .populate(
          "routineId"
        )
        .sort({
          localDate: 1,
        });

      res.json(insertions);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// COMPLETE ITEM
exports.completeItem =
  async (req, res) => {

    try {

      const insertion =
        await RoutineInsertion.findOne({

          _id:
            req.params.id,

          ownerId:
            req.userId,
        });

      if (!insertion) {

        return res.status(404).json({
          message:
            "Routine insertion not found",
        });
      }

      const item =
        insertion.items.id(
          req.params.itemId
        );

      if (!item) {

        return res.status(404).json({
          message:
            "Item not found",
        });
      }

      item.completed =
        !item.completed;

      item.completedAt =
        item.completed
          ? new Date()
          : null;

      const allComplete =
        insertion.items.every(
          (i) =>
            i.completed
        );

      insertion.status =
        allComplete
          ? "completed"
          : "pending";

      await insertion.save();

      res.json(insertion);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};