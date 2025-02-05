const express = require("express");
const usersController = require("../controllers/users");
const authMiddleware = require("../middlewares/auth");
const isAdminMiddleware = require("../middlewares/isAdmin");

const router = express.Router();

router
  .route("/")
  .get(authMiddleware, isAdminMiddleware, usersController.getAll);
router
  .route("/:id")
  .get(authMiddleware, isAdminMiddleware, usersController.getOne);
router
  .route("/:id")
  .put(authMiddleware, isAdminMiddleware, usersController.changeRole);
router
  .route("/:id/remove")
  .delete(authMiddleware, isAdminMiddleware, usersController.remove);

module.exports = router;
