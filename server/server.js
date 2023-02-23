const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const HTTPS_PORT = 3085;

const app = express();

app.use(cookieParser());

app.use(
    cors({
        origin: [
            "http://localhost:5500", // 포트가 달라도 통신을 허용
        ],
        credentials: true, // <- 인증정보가 필요한 요청을 허용
    })
);

app.get("/", (req, res) => {
    console.log("res!");
    // res.setHeader("Access-Control-Allow-origin", "*");

    // 이렇게 하면 클라이언트에 심어짐?
    res.cookie("cookieName", "cookieValue");
    res.status(200).send({ data: "success" });
});

app.listen(HTTPS_PORT, () => console.log(`Example app listening on port ${HTTPS_PORT}!`));
