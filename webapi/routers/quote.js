const express = require("express");
const requireLogin = require("../config/auth");
const {
  create,
  getAllQuotes,
  getQuote,
  deleteQuote,
  updateQuote
} = require("../controllers/quote");
const { quoteValidationRules, validate} = require("../middlware/validator");

const router = express.Router();

router.post("/post", quoteValidationRules, validate, create);
router.get("/all", requireLogin, getAllQuotes);
router.get("/single/:quoteId", requireLogin, getQuote);
router.put("/quote/:quoteId", requireLogin, updateQuote);
router.delete("/quote/:quoteId", requireLogin, deleteQuote);

module.exports = router;
