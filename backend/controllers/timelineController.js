const {
  getTimelineRange,
} = require("../services/timelineService");

const { DateTime } = require("luxon");

// DAILY
exports.getDailyTimeline =
  async (req, res) => {

    try {

      const ownerId = req.userId;

      const date =
        req.query.date ||
        DateTime.now().toISODate();

      const occurrences =
        await getTimelineRange(
          ownerId,
          date,
          date
        );

      res.json({
        type: "daily",
        date,
        occurrences,
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        message:
          "Error fetching daily timeline",
      });
    }
};

// WEEKLY
exports.getWeeklyTimeline =
  async (req, res) => {

    try {

      const ownerId = req.userId;

      const base =
        req.query.date
          ? DateTime.fromISO(
              req.query.date
            )
          : DateTime.now();

      const start =
        base.startOf("week");

      const end =
        base.endOf("week");

      const occurrences =
        await getTimelineRange(
          ownerId,
          start.toISODate(),
          end.toISODate()
        );

      res.json({
        type: "weekly",
        start:
          start.toISODate(),

        end:
          end.toISODate(),

        occurrences,
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        message:
          "Error fetching weekly timeline",
      });
    }
};

// MONTHLY
exports.getMonthlyTimeline =
  async (req, res) => {

    try {

      const ownerId = req.userId;

      const base =
        req.query.date
          ? DateTime.fromISO(
              req.query.date
            )
          : DateTime.now();

      const start =
        base.startOf("month");

      const end =
        base.endOf("month");

      const occurrences =
        await getTimelineRange(
          ownerId,
          start.toISODate(),
          end.toISODate()
        );

      res.json({
        type: "monthly",

        start:
          start.toISODate(),

        end:
          end.toISODate(),

        occurrences,
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        message:
          "Error fetching monthly timeline",
      });
    }
};