const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema(
{
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  description: String,

  category: String,

  targetValue: Number,

  measurementType: {
    type: String,
    enum: [
      "tasks",
      "hours",
      "sessions",
      "custom",
    ],
    default: "tasks",
  },

  archived: {
    type: Boolean,
    default: false,
  },
},
{ timestamps: true }
);

module.exports = mongoose.model("Goal", GoalSchema);