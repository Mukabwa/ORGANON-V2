const Routine =
  require("../models/Routine");

const RoutineInsertion =
  require(
    "../models/RoutineInsertion"
  );

const insertRoutine =
  async (
    ownerId,
    routineId,
    localDate,
    time
  ) => {

    const routine =
      await Routine.findOne({

        _id: routineId,

        ownerId,
      });

    if (!routine) {
      throw new Error(
        "Routine not found"
      );
    }

    const insertion =
      await RoutineInsertion.create({

        ownerId,

        routineId,

        localDate,

        time,

        items:
          routine.items.map(
            (item) => ({

              title:
                item.title,

              description:
                item.description,

              order:
                item.order,
            })
          ),
      });

    return insertion;
};

module.exports = {
  insertRoutine,
};
