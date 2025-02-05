const { isValidObjectId } = require("mongoose");
const gradesModel = require("../models/grade");
const usersModel = require("../models/users");

exports.getAll = async (req, res) => {
  const grades = await gradesModel.find({}).lean();

  return res.json(grades);
};

exports.getOne = async (req, res) => {
  const userGrades = await gradesModel.find({ userID: req.user._id });

  return res.json(userGrades);
};
exports.add = async (req, res) => {
  const { userID, exam, grade } = req.body;

  const isUserExists = await usersModel.findOne({ _id: userID });

  if (!isUserExists) {
    return res.status(404).json({
      message: "کاربر وجود ندارد",
    });
  }

  const addGrade = await gradesModel.create({
    userID,
    exam,
    grade,
  });

  return res.status(201).json({
    message: "نمره با موفقیت وارد شد",
    addGrade,
  });
};

exports.edit = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      message: "آیدی آزمون معتبر نیست",
    });
  }

  const editGrade = await gradesModel.findOneAndUpdate(
    { _id: id },
    {
      grade: req.body.grade,
    }
  );

  if (!editGrade) {
    return res.status(404).json({
      message: "آزمون پیدا نشد",
    });
  }

  return res.status(200).json({
    message: "نمره با موفقیت ویرایش شد",
    editGrade,
  });
};
