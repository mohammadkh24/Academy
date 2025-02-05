const usersModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, lastName, email, studentNumber, password } = req.body;

  const isUserExists = await usersModel.findOne({
    $or: [{ email }, { studentNumber }],
  });

  if (isUserExists) {
    return res.status(409).json({
      message: "کاربر با این شماره دانشجویی یا ایمیل قبلا ثبت نام کرده",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const countUsers = await usersModel.countDocuments();

  const user = await usersModel.create({
    name,
    lastName,
    email,
    studentNumber,
    password: hashPassword,
    role: countUsers > 0 ? "USER" : "ADMIN",
  });

  const userObject = user.toObject();
  Reflect.deleteProperty(userObject, "password");

  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30 days",
  });

  return res.status(201).json({
    message: "ثبت نام با موفقیت انجام شد",
    user: userObject,
    token: accessToken,
  });
};

exports.login = async (req, res) => {
  const { studentNumber, password } = req.body;

  const user =await usersModel.findOne({ studentNumber })
  
  if (!user) {
    return res.status(404).json({
        message : "کاربر وجود ندارد"
    })
  }

  const isValidPassword = await bcrypt.compare(password , user.password);

  if (!isValidPassword) {
    return res.status(400).json({
        message : "رمز عبور معتبر نیست"
    })
  }

  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30 days",
  });

  const userObject = user.toObject();
  Reflect.deleteProperty(userObject, "password");

  return res.json({
    message : "ورود موفقیت آمیز بود",
    user : userObject,
    accessToken
  })
};

exports.getMe = async (req, res) => {
    const user = await usersModel.findOne({ _id : req.user._id }).select("-password")

    return res.json(user)
};
