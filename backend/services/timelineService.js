const Occurrence =
  require("../models/Occurrence");

const {
  generateOccurrencesForRange,
} = require("./occurrenceService");

const getTimelineRange =
  async (
    ownerId,
    startDate,
    endDate
  ) => {

    // ensure occurrences exist
    await generateOccurrencesForRange(
      ownerId,
      startDate,
      endDate
    );

    // fetch occurrences
    const occurrences =
      await Occurrence.find({

        ownerId,

        localDate: {
          $gte: startDate,
          $lte: endDate,
        },
      })
      .sort({
        localDate: 1,
        time: 1,
      });

    return occurrences;
};

module.exports = {
  getTimelineRange,
};