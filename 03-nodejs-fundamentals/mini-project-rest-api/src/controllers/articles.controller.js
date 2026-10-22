
const articles = [];

// Memvalidasi data artikel
const validateArticle = (body) => {
  if (
    !body ||
    typeof body.title !== "string" ||
    body.title.trim() === "" ||
    typeof body.content !== "string" ||
    body.content.trim() === ""
  ) {
    return false;
  }

  return true;
};

// Memvalidasi index dari URL
const getArticleIndex = (value) => {
  if (!/^\d+$/.test(value)) {
    return null;
  }

  const index = Number(value);

  if (!Number.isSafeInteger(index)) {
    return null;
  }

  return index;
};

// GET: mengambil semua artikel
const getArticles = (req, res) => {
  res.json(articles);
};

// POST: membuat artikel baru
const createArticle = (req, res) => {
  if (!validateArticle(req.body)) {
    return res.status(400).json({
      message: "Judul dan konten artikel wajib diisi.",
    });
  }

  const article = {
    title: req.body.title.trim(),
    content: req.body.content.trim(),
  };

  articles.push(article);

  res.status(201).json(article);
};

// PUT: memperbarui artikel
const updateArticle = (req, res) => {
  const index = getArticleIndex(req.params.index);

  if (index === null) {
    return res.status(400).json({
      message: "Index artikel harus berupa bilangan bulat nonnegatif.",
    });
  }

  if (index >= articles.length) {
    return res.status(404).json({
      message: "Artikel tidak ditemukan.",
    });
  }

  if (!validateArticle(req.body)) {
    return res.status(400).json({
      message: "Judul dan konten artikel wajib diisi.",
    });
  }

  articles[index] = {
    title: req.body.title.trim(),
    content: req.body.content.trim(),
  };

  res.json(articles[index]);
};

// DELETE: menghapus artikel
const deleteArticle = (req, res) => {
  const index = getArticleIndex(req.params.index);

  if (index === null) {
    return res.status(400).json({
      message: "Index artikel harus berupa bilangan bulat nonnegatif.",
    });
  }

  if (index >= articles.length) {
    return res.status(404).json({
      message: "Artikel tidak ditemukan.",
    });
  }

  articles.splice(index, 1);

  res.json({
    message: "Artikel berhasil dihapus.",
  });
};

module.exports = {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};
