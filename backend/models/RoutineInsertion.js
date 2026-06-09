const mongoose = require("mongoose");

const RoutineInsertionItemSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        default: "",
      },

      order: {
        type: Number,
        required: true,
      },

      completed: {
        type: Boolean,
        default: false,
      },

      completedAt: Date,
    },
    { _id: true }
  );

const RoutineInsertionSchema =
  new mongoose.Schema(
    {
      ownerId: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,

        index: true,
      },

      routineId: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Routine",

        required: true,

        index: true,
      },

      localDate: {
        type: String,
        required: true,
        index: true,
      },

      time: {
        type: String,
      },

      status: {
        type: String,

        enum: [
          "pending",
          "completed",
        ],

        default: "pending",
      },

      items: [
        RoutineInsertionItemSchema,
      ],
    },
    { timestamps: true }
  );

RoutineInsertionSchema.index({
  ownerId: 1,
  localDate: 1,
});

module.exports =
  mongoose.model(
    "RoutineInsertion",
    RoutineInsertionSchema
  );