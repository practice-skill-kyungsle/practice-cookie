const express = require("express");
const HTTPS_PORT = 3085;

const app = express();

app.get("/", (req, res) => res.send("Welcome My Book Comment Server!"));

app.listen(HTTPS_PORT, () =>
  console.log(`Example app listening on port ${HTTPS_PORT}!`)
);
