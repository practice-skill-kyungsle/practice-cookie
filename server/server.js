const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const HTTPS_PORT = 3085;

const app = express();

// client에서 cookie를 받아올 수 있게 해줌
app.use(cookieParser());

app.use(
    cors({
        // 통신을 허용해줄 url 적을 수 있음
        origin: ["http://localhost:5500"],
        // 클리이언트가 credentials true인데 얘를 안 켜주면 에러남
        credentials: true,
    })
);

app.get("/", (req, res) => {
    // 클라이언트에 쿠키를 보내줌. key-value 형식
    res.cookie("cookieKey", "cookieValue");
    // 클라이언트에서 보내주는 쿠키를 서버에서 받을 수 있음 (cookieParser의 역할)
    console.log(req.cookies);
    // response 를 끝내주기.
    res.end();
});

app.listen(HTTPS_PORT, () => console.log(`Example app listening on port ${HTTPS_PORT}!`));
