const express = require("express");
const dotenv = require("dotenv").config({ path: "./config.env" });
const app = express();
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`the server is running at port ${PORT}`);
});
