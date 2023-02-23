const express = require("express");
const cookieParser = require("cookie-parser");
const HTTPS_PORT = 3085;

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
    // read cookies
    console.log(req.cookies);

    // Set cookie
    res.cookie("cookieName", "cookieValue");
    res.send("Welcome My Book Comment Server!");
});

app.listen(HTTPS_PORT, () => console.log(`Example app listening on port ${HTTPS_PORT}!`));
