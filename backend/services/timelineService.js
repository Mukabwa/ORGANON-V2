const Occurrence =
  require("../models/Occurrence");

const {
  generateOccurrencesForRange,
} = require("./occurrenceService");

const normalizeOccurrence =
  (occurrence) => {

    return {

      _id:
        occurrence._id,

      definitionId:
        occurrence.definitionId,

      // IMPORTANT:
      // this is the REAL rendered planner date
      effectiveLocalDate:

        occurrence.overrideData
          ?.localDate ||

        occurrence.localDate,

      // original generated date
      originalLocalDate:
        occurrence.localDate,

      timezone:
        occurrence.timezone,

      time:

        occurrence.overrideData
          ?.time ||

        occurrence.time,

      status:
        occurrence.status,

      notes:
        occurrence.notes,

      title:

        occurrence.overrideData
          ?.title ||

        occurrence.snapshot
          ?.title,

      description:

        occurrence.overrideData
          ?.description ||

        occurrence.definitionId
          ?.description,

      priority:
        occurrence.snapshot
          ?.priority,

      overrideData:
        occurrence.overrideData,
    };
};

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

    // fetch all occurrences
    // IMPORTANT:
    // moved occurrences may exist
    // outside original query range
    const occurrences =
      await Occurrence.find({
        ownerId,
      })
      .populate(
        "definitionId"
      )
      .sort({
        localDate: 1,
        time: 1,
      });

    // normalize occurrences
    const normalized =
      occurrences.map(
        normalizeOccurrence
      );

    // filter by EFFECTIVE date
    const filtered =
      normalized.filter(
        (occurrence) => {

          return (

            occurrence
              .effectiveLocalDate

              >= startDate &&

            occurrence
              .effectiveLocalDate

              <= endDate
          );
        }
      );

    return filtered;
};

module.exports = {
  getTimelineRange,
};