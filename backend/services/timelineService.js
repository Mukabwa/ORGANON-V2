const Occurrence =
  require("../models/Occurrence");

const RoutineInsertion =
  require(
    "../models/RoutineInsertion"
  );

const {
  generateOccurrencesForRange,
} = require("./occurrenceService");

const normalizeOccurrence =
  (occurrence) => {

    return {

      _id:
        occurrence._id,

      type:
        "occurrence",

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

const normalizeRoutineInsertion =
  (insertion) => {

    return {

      _id:
        insertion._id,

      type:
        "routine",

      routineId:
        insertion.routineId,

      effectiveLocalDate:
        insertion.localDate,

      originalLocalDate:
        insertion.localDate,

      time:
        insertion.time,

      status:
        insertion.status,

      title:
        insertion.routineId
          ?.title,

      description:
        insertion.routineId
          ?.description,

      items:
        insertion.items,
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

    // fetch occurrences
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

    const normalizedOccurrences =
      occurrences.map(
        normalizeOccurrence
      );

    const filteredOccurrences =
      normalizedOccurrences.filter(
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

    // fetch routine insertions
    const routineInsertions =
      await RoutineInsertion.find({

        ownerId,

        localDate: {

          $gte: startDate,

          $lte: endDate,
        },
      })
        .populate(
          "routineId"
        );

    const normalizedInsertions =
      routineInsertions.map(
        normalizeRoutineInsertion
      );

    // merge both systems
    const timeline = [

      ...filteredOccurrences,

      ...normalizedInsertions,
    ];

    // sort final timeline
    timeline.sort(
      (a, b) => {

        if (
          a.effectiveLocalDate <
          b.effectiveLocalDate
        ) {
          return -1;
        }

        if (
          a.effectiveLocalDate >
          b.effectiveLocalDate
        ) {
          return 1;
        }

        return (
          (a.time || "")
            .localeCompare(
              b.time || ""
            )
        );
      }
    );

    return timeline;
};

module.exports = {
  getTimelineRange,
};