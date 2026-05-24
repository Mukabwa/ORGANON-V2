const Occurrence =
  require("../models/Occurrence");

const Definition =
  require("../models/Definition");

const {
  matchesRecurrenceRule,
} = require("./recurrenceService");


// CREATE ONE OCCURRENCE
const generateOccurrence =
  async (
    ownerId,
    definition,
    localDate
  ) => {

    const scheduling =
      definition.scheduling;

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

    return occurrence;
};


// FIND OR CREATE
const findOrCreateOccurrence =
  async (
    ownerId,
    definition,
    localDate
  ) => {

    // existing occurrence?
    const existing =
      await Occurrence.findOne({

        definitionId:
          definition._id,

        localDate,
      });

    if (existing) {
      return existing;
    }

    // create new occurrence
    return await generateOccurrence(

      ownerId,

      definition,

      localDate
    );
};


// SHOULD OCCURRENCE EXIST?
const shouldGenerateOccurrence =
  (
    definition,
    localDate
  ) => {

    const scheduling =
      definition.scheduling;

    // ONCE
    if (
      scheduling.type === "once"
    ) {

      return (
        scheduling.localDate ===
        localDate
      );
    }

    // RECURRING
    if (
      scheduling.type ===
      "recurring"
    ) {

      return matchesRecurrenceRule(
        definition,
        localDate
      );
    }

    return false;
};


// GENERATE RANGE
const generateOccurrencesForRange =
  async (
    ownerId,
    startDate,
    endDate
  ) => {

    const definitions =
      await Definition.find({

        ownerId,

        "state.archived":
          false,

        "state.deleted":
          false,
      });

    const generated = [];

    let current =
      new Date(startDate);

    while (
      current <=
      new Date(endDate)
    ) {

      const localDate =
        current
          .toISOString()
          .split("T")[0];

      for (const definition of definitions) {

        const shouldExist =
          shouldGenerateOccurrence(
            definition,
            localDate
          );

        if (!shouldExist) {
          continue;
        }

        const occurrence =
          await findOrCreateOccurrence(

            ownerId,

            definition,

            localDate
          );

        generated.push(
          occurrence
        );
      }

      current.setDate(
        current.getDate() + 1
      );
    }

    return generated;
};

module.exports = {

  generateOccurrence,

  findOrCreateOccurrence,

  shouldGenerateOccurrence,

  generateOccurrencesForRange,
};