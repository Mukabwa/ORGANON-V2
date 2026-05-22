const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
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

  color: String,

  icon: String,

  archived: {
    type: Boolean,
    default: false,
  },
},
{ timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);