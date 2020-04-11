const express = require("express");
const requireLogin = require("../config/auth");
const { validate, userValidationRules } = require("../middlware/validator");
const {
  createAccount,
  accountLogin,
  getAllUsers,
  getUser,
  deleteUser,
  logout,
  updateInfo,
  photo,
  uploadPhoto
} = require("../controllers/user");
const { upload } = require("../middlware/fileupload");

const router = express.Router();

router.post("/user", userValidationRules, validate, createAccount);
router.get("/all_users", requireLogin, getAllUsers);
router.post("/login",)
router.get("/single_user", requireLogin, getUser);
router.delete("/user/:userId", requireLogin, deleteUser);
router.put("/profile/photo", requireLogin, upload.single("image"), uploadPhoto);
router.get("/photo/:userId", photo)
module.exports = router;