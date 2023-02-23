# prac_cookie

server에서 쿠키를 보내고 받아보는 연습을 해봅시다.

## 사용법

```shell
cd server
npm start
```
이후 `client/index.html` 을 live server로 열어서 저는 사용했습니다.

## 알면 좋은 상식들

### module

코드 최상단에서 require을 해주면서 코드에 필요한 라이브러리, 미들웨어등을 가져옵니다. 원래 자바스크립트에서는 모듈을 가져오는 것이 불가능했습니다. 복수의 JavaScript 파일을 로드할 경우 하나의 파일로 merge되며 동일한 유효범위를 갖게 되었죠. 현재 대부분의 브라우저가 ES6의 모듈을 지원하지 않고 있으므로 ES6 모듈을 현재의 브라우저에서 사용하기 위해서는 SystemJS, RequireJS 등의 모듈 로더 또는 Webpack 등의 모듈번들러를 사용하여야 합니다.

Node.js는 module 단위로 각 기능을 분할할 수 있습니다. `module은 파일과 1대1의 대응 관계를 가지며 하나의 모듈은 자신만의 독립적인 실행 영역(Scope)를 가지게 됩니다.` 따라서 클라이언트 사이드 JavaScript와는 달리 전역변수의 중복 문제가 발생하지 않습니다.

이 코드에 대해서도 다양한 모듈들을 가져오고 있습니다.

### express

**middleware**와 **database** libraries를 가지고 Express applications을 만들어주기 위해서 가져옵니다.

-   database : 여러 사람에 의해 공유되어 사용될 목적으로 통합하여 관리되는 데이터의 집합입니다.
-   middleware : 서버에서 요청을 처리하기 전에 어던 행동을 해줄 수 있게 해주는 도구입니다.

### http

**http**를 통해서 페이지를 띄울 수 있게 만들어줍니다. http와 https의 큰 차이는 보안입니다. 

### cors

CORS란 자신이 속하지 않은 **다른 도메인, 다른 프로토콜, 혹은 다른 포트**에 있는 리소스를 요청하는 `cross-origin HTTP 요청 방식`입니다. 서버는 기본적으로 CORS 방식을 제한해둡니다. 즉, 사용하지 못하게 합니다. 왜냐하면, 특정 서버 리소스에 다른 임의의 웹 사이트들이 request를 보낼 수 있다면 악의적으로 특정 서버의 세션을 탈취하거나 서버에 무리가 가는 행위 등 문제가 생길 수 있는 행위를 할 수 있기 때문입니다.

`app.use(cors())` 이런 식으로 사용하면 모든 도메인에 대한 CORS를 허용합니다. 혹은 위의 코드처럼 작성한다면 제가 원하는 도메인을 작성해둘 수 있습니다.

### app.use

- app : 서버에 접근하여 할 수 있는 행동들이 담긴 함수
- app.use : app이라는 함수를 통해서 특정 End Point 에서 어떤 요청을 서버에 보내는지를 설정

```js
app.get("/user/:id", function (req, res) {
  res.send("user " + req.params.id);
});
```

첫 번째 인수가 url이며 두 번째 인수는 res와 req를 매개변수로 받는 함수입니다. 코드에서는 res.send 를 통해서, 함수 내부의 결과값을 보내주고 있습니다.

-  req : 클라이언트에서 서버로 보내는 요청에 대한 정보를 담고 있음

### app.use와 app.get의 차이
app.use는 /about으로 했을 경우 /about과 /about/:id 모두 app.use를 탑니다. 반면 라우터인 **app.get은 정확히 일치하는 것만 탑니다.** 그래서 app.use를 했을 때 res.end가 두 번 호출됩니다. app.use는 라우터들의 공통 로직을 분리하는 용도로 사용하는 겁니다.