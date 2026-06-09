const mongoose = require("mongoose");

const DefinitionSchema = new mongoose.Schema(
{
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },

  kind: {
    type: String,

    enum: [
      "task",
      "event",
      "milestone",
    ],

    default: "task",
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

  scheduling: {

    type: {
      type: String,

      enum: [
        "once",
        "recurring",
      ],

      default: "once",
    },

    localDate: {
      type: String,
    },

    timezone: {
      type: String,
      default: "Africa/Nairobi",
    },

    time: {
      type: String,
    },

    recurrenceRule: {

      frequency: {

        type: String,

        enum: [
          "daily",
          "weekly",
          "monthly",
          "yearly",
        ],
      },

      interval: {
        type: Number,
        default: 1,
      },

      daysOfWeek: [
        {
          type: String,
        },
      ],

      dayOfMonth: Number,

      startDate: String,

      endDate: String,
    },
  },

  associations: {

    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },

    goalIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Goal",
      },
    ],

    tags: [
      {
        type: String,
      },
    ],
  },

  metadata: {

    priority: {

      type: String,

      enum: [
        "low",
        "medium",
        "high",
      ],

      default: "medium",
    },

    color: String,

    icon: String,
  },

  state: {

    archived: {
      type: Boolean,
      default: false,
    },

    deleted: {
      type: Boolean,
      default: false,
    },
  },
},
{ timestamps: true }
);

module.exports = mongoose.model(
  "Definition",
  DefinitionSchema
);