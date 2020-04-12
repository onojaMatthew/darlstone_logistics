const express = require("express");
const requireLogin = require("../config/auth");
const { userValidationRules } = require("../middlware/validator");
const {
  createAccount,
  accountLogin,
  getAllUsers,
  getUser,
  deleteUser,
  logout,
  photo,
  uploadPhoto
} = require("../controllers/user");
const { upload } = require("../middlware/fileupload");

const router = express.Router();

router.post("/user", createAccount);
router.get("/users", requireLogin, getAllUsers);
router.post("/login", accountLogin);
router.get("/user/:userId", requireLogin, getUser);
router.get("/logout", logout);
router.delete("/user/:userId", requireLogin, deleteUser);
router.put("/profile/photo", requireLogin, upload.single("image"), uploadPhoto);
router.get("/photo/:userId", photo);

module.exports = router;