const Occurrence =
  require("../models/Occurrence");

const Definition =
  require("../models/Definition");

const {
  matchesRecurrenceRule,
} = require("./recurrenceService");

const generateOccurrencesForRange =
  async (
    ownerId,
    startDate,
    endDate
  ) => {

    const definitions =
      await Definition.find({
        ownerId,
        "state.archived": false,
        "state.deleted": false,
      });

    const generated = [];

    let current =
      new Date(startDate);

    while (current <= endDate) {

      const localDate =
        current.toISOString().split("T")[0];

      for (const definition of definitions) {

        const scheduling =
          definition.scheduling;

        let shouldExist = false;

        // ONCE
        if (
          scheduling.type === "once" &&
          scheduling.localDate === localDate
        ) {
          shouldExist = true;
        }

        // RECURRING
        if (
          scheduling.type === "recurring"
        ) {
          shouldExist =
            matchesRecurrenceRule(
              definition,
              localDate
            );
        }

        if (!shouldExist) continue;

        // CHECK EXISTING
        const existing =
          await Occurrence.findOne({
            definitionId: definition._id,
            localDate,
          });

        if (existing) {
          generated.push(existing);
          continue;
        }

        // CREATE OCCURRENCE
        const occurrence =
          await Occurrence.create({

            ownerId,

            definitionId:
              definition._id,

            localDate,

            timezone:
              scheduling.timezone,

            time:
              scheduling.time,

            snapshot: {
              title:
                definition.title,

              priority:
                definition.metadata
                  ?.priority,
            },
          });

        generated.push(occurrence);
      }

      current.setDate(
        current.getDate() + 1
      );
    }

    return generated;
};

module.exports = {
  generateOccurrencesForRange,
};