const { isValidObjectId } = require("mongoose");
const usersModel = require("../models/users");

exports.getAll = async (req, res) => {
  const users = await usersModel.find({}).select("-password");

  return res.json(users);
};

exports.getOne = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      message: "آیدی وارد شده معتبر نیست",
    });
  }

  const user = await usersModel.findOne({ _id: id }).select("-password");

  if (!user) {
    return res.status(404).json({
      message: "کاربر وجود ندارد",
    });
  }

  return res.json(user);
};

exports.changeRole = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      message: "آیدی وارد شده معتبر نیست",
    });
  }

  const user = await usersModel.findOneAndUpdate(
    { _id: id },
    {
      role: req.body.role,
    }
  );

  if (!user) {
    return res.status(404).json({
      message: "کاربر پیدا نشد",
    });
  }

  return res.status(200).json({
    message: "نقش کاربر با موفقیت تغییر یافت",
  });
};

exports.remove = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      message: "آیدی وارد شده معتبر نیست",
    });
  }

  const removeUser = await usersModel.findOneAndDelete({ _id: id })

  if (!removeUser) {
    return res.status(404).json({
      message: "کاربر وجود ندارد",
    });
  }

  return res.status(201).json({
    message : "کاربر با موفقیت حذف شد",
    removeUser
  })
};
