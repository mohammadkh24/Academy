const { body } = require("express-validator");

const registerValidator = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("نام نمی‌تواند خالی باشد")
      .isLength({ min: 2 })
      .withMessage("نام باید حداقل ۲ کاراکتر باشد"),

    body("lastName")
      .notEmpty()
      .withMessage("نام خانوادگی نمی‌تواند خالی باشد")
      .isLength({ min: 2 })
      .withMessage("نام خانوادگی باید حداقل ۲ کاراکتر باشد"),

    body("email")
      .notEmpty()
      .withMessage("ایمیل نمی‌تواند خالی باشد")
      .isEmail()
      .withMessage("فرمت ایمیل نامعتبر است"),

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

    body("confirmPassword")
      .notEmpty()
      .withMessage("تایید رمز عبور نمی‌تواند خالی باشد")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("رمزهای عبور با هم مطابقت ندارند");
        }
        return true;
      }),
  ];
};

module.exports = { registerValidator };
