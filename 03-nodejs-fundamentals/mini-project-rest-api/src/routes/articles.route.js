const express = require("express");

const {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articles.controller");

const router = express.Router();

router.get("/", getArticles);
router.post("/", createArticle);
router.put("/:index", updateArticle);
router.delete("/:index", deleteArticle);

module.exports = router;