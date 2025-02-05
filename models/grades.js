const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  course: {
    type: String,
    required: true, 
  },
  grade: {
    type: Number,
    required: true, 
  },
});

const Grade = mongoose.model("Grade", gradeSchema);

module.exports = Grade;
