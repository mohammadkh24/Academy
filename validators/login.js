const { body } = require("express-validator");

const loginValidator = () => {
  return [
    body("studentNumber")
      .notEmpty()
      .withMessage("شماره دانشجویی نمی‌تواند خالی باشد")
      .isNumeric()
      .withMessage("شماره دانشجویی باید فقط شامل اعداد باشد"),

    body("password")
      .notEmpty()
      .withMessage("رمز عبور نمی‌تواند خالی باشد")
      .isLength({ min: 8 })
      .withMessage("رمز عبور باید حداقل ۸ کاراکتر باشد"),

   
  ];
};

module.exports = { loginValidator };
