const express = require("express");
require("dotenv").config();

const logger = require("./middlewares/logger.middleware");
const articleRoutes = require("./routes/articles.route");

const app = express();

app.use(express.json());
app.use(logger);
app.use("/articles", articleRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});