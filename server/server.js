const express = require("express");
const cookieParser = require("cookie-parser");
const HTTPS_PORT = 3085;

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-origin", "*");

    // 이렇게 하면 클라이언트에 심어짐?
    res.cookie("cookieName", "cookieValue");
    // console.log(res);
    res.status(200).send({ data: "success" });
});

app.listen(HTTPS_PORT, () => console.log(`Example app listening on port ${HTTPS_PORT}!`));
