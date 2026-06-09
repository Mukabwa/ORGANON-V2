const mongoose = require("mongoose");

const RoutineItemSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      description: {
        type: String,
        default: "",
      },

      order: {
        type: Number,
        required: true,
      },
    },
    { _id: true }
  );

const RoutineSchema =
  new mongoose.Schema(
    {
      ownerId: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,

        index: true,
      },

      title: {
        type: String,
        required: true,
        trim: true,
      },

      description: {
        type: String,
        default: "",
      },

      icon: {
        type: String,
        default: "",
      },

      color: {
        type: String,
        default: "",
      },

      items: [RoutineItemSchema],

      archived: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  );

module.exports =
  mongoose.model(
    "Routine",
    RoutineSchema
  );