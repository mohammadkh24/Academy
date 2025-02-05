const express = require("express");
const gradeController = require("../controllers/grade")
const authMiddleware = require("../middlewares/auth");
const isAdminMiddleware = require("../middlewares/isAdmin");
const validateMiddleware = require("../middlewares/validate");
const { gradeValidator } = require("../validators/grade");

const router = express.Router();

router.route("/").get(authMiddleware , isAdminMiddleware , gradeController.getAll)
router.route("/get").get(authMiddleware , gradeController.getOne)
router.route("/add").post(authMiddleware, isAdminMiddleware, gradeValidator() , validateMiddleware , gradeController.add)
router.route("/:id/edit").put(authMiddleware, isAdminMiddleware , gradeController.edit)


module.exports = router