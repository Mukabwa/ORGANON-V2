const Occurrence =
  require("../models/Occurrence");

// COMPLETE
exports.completeOccurrence =
  async (req, res) => {

    try {

      const occurrence =
        await Occurrence.findOneAndUpdate(

          {
            _id:
              req.params.id,

            ownerId:
              req.userId,
          },

          {
            status:
              "completed",

            completedAt:
              new Date(),
          },

          {
            new: true,
          }
        );

      if (!occurrence) {

        return res.status(404).json({
          message:
            "Occurrence not found",
        });
      }

      res.json(occurrence);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// SKIP
exports.skipOccurrence =
  async (req, res) => {

    try {

      const occurrence =
        await Occurrence.findOneAndUpdate(

          {
            _id:
              req.params.id,

            ownerId:
              req.userId,
          },

          {
            status:
              "skipped",
          },

          {
            new: true,
          }
        );

      if (!occurrence) {

        return res.status(404).json({
          message:
            "Occurrence not found",
        });
      }

      res.json(occurrence);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// CANCEL
exports.cancelOccurrence =
  async (req, res) => {

    try {

      const occurrence =
        await Occurrence.findOneAndUpdate(

          {
            _id:
              req.params.id,

            ownerId:
              req.userId,
          },

          {
            status:
              "cancelled",
          },

          {
            new: true,
          }
        );

      if (!occurrence) {

        return res.status(404).json({
          message:
            "Occurrence not found",
        });
      }

      res.json(occurrence);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// ADD NOTES
exports.addNotes =
  async (req, res) => {

    try {

      const occurrence =
        await Occurrence.findOneAndUpdate(

          {
            _id:
              req.params.id,

            ownerId:
              req.userId,
          },

          {
            notes:
              req.body.notes,
          },

          {
            new: true,
          }
        );

      if (!occurrence) {

        return res.status(404).json({
          message:
            "Occurrence not found",
        });
      }

      res.json(occurrence);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

exports.overrideOccurrence =
  async (req, res) => {

    try {

      const occurrence =
        await Occurrence.findOne({

          _id:
            req.params.id,

          ownerId:
            req.userId,
        });

      if (!occurrence) {

        return res.status(404).json({
          message:
            "Occurrence not found",
        });
      }

      occurrence.overrideData = {

        ...occurrence.overrideData,

        ...req.body,
      };

      await occurrence.save();

      res.json(occurrence);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};