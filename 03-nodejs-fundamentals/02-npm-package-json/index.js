const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let nextId = 1;
const articles = [];

// READ: menampilkan semua artikel
app.get("/articles", (req, res) => {
  res.status(200).json(articles);
});

// READ: menampilkan satu artikel
app.get("/articles/:id", (req, res) => {
  const id = Number(req.params.id);
  const article = articles.find((item) => item.id === id);

  if (!article) {
    return res.status(404).json({
      message: "Artikel tidak ditemukan",
    });
  }

  return res.status(200).json(article);
});

// CREATE: menambahkan artikel
app.post("/articles", (req, res) => {
  const { title, content } = req.body ?? {};

  if (
    typeof title !== "string" ||
    !title.trim() ||
    typeof content !== "string" ||
    !content.trim()
  ) {
    return res.status(400).json({
      message: "Title dan content wajib diisi",
    });
  }

  const article = {
    id: nextId++,
    title: title.trim(),
    content: content.trim(),
  };

  articles.push(article);

  return res.status(201).json(article);
});

// UPDATE: memperbarui artikel
app.put("/articles/:id", (req, res) => {
  const id = Number(req.params.id);
  const article = articles.find((item) => item.id === id);

  if (!article) {
    return res.status(404).json({
      message: "Artikel tidak ditemukan",
    });
  }

  const { title, content } = req.body ?? {};

  if (
    typeof title !== "string" ||
    !title.trim() ||
    typeof content !== "string" ||
    !content.trim()
  ) {
    return res.status(400).json({
      message: "Title dan content wajib diisi",
    });
  }

  article.title = title.trim();
  article.content = content.trim();

  return res.status(200).json(article);
});

// DELETE: menghapus artikel
app.delete("/articles/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = articles.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Artikel tidak ditemukan",
    });
  }

  const [deletedArticle] = articles.splice(index, 1);

  return res.status(200).json({
    message: "Artikel berhasil dihapus",
    article: deletedArticle,
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});