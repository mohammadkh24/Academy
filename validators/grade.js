const { body } = require("express-validator");

const gradeValidator = () => {
  return [
    body("userID")
      .notEmpty()
      .withMessage("شناسه کاربر نمی‌تواند خالی باشد")
      .isMongoId()
      .withMessage("شناسه کاربر نامعتبر است"),

    body("exam")
      .notEmpty()
      .withMessage("نام آزمون نمی‌تواند خالی باشد")
      .isLength({ min: 2 })
      .withMessage("نام آزمون باید حداقل ۲ کاراکتر داشته باشد"),

    body("grade")
      .notEmpty()
      .withMessage("نمره نمی‌تواند خالی باشد")
      .isFloat({ min: 0, max: 100 })
      .withMessage("نمره باید بین 0 تا 100 باشد"),
  ];
};

module.exports = { gradeValidator };
