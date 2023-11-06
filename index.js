const express = require("express");
const dotenv = require("dotenv").config({ path: "./config.env" });
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`the server is running at port ${PORT}`);
});
