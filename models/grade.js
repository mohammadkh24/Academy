const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    exam: {
      type: String,
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Grade = mongoose.model("Grade", gradeSchema);

module.exports = Grade;
