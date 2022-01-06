# fe-w23-shoppinghow

## 새롭게 알게된 것들

---

### 빌드된 결과물을 .gitignore로 관리하는 이유

> 빌드 결과물은 빌드를 돌리는 시스템마다 결과물이 다를 수 있다. (쓸데없는 변경내역이 생김)
>
> 개발 중에만 쓰여야할 환경설정 파일에 민감정보가 있다면 빌드 결과물에 포함될 수 있다. (보안문제)
>
> 이 밖에도 단점이 많다. 반면에 빌드 파일이 올라가서 좋은 것은 하나도 없다.
>
> 출처) https://okky.kr/article/1129220?note=2629648

---

### SCSS 파일명 앞에 _(언더바)를 붙이는 경우

> _를 붙인 SCSS 파일은 sass 파일의 일부분, 즉 `@import`되어야 하는 대상임을 의미한다. `@import` 되지 않으면 트랜스파일링 되지 않는다.
>
> ```css
> /scss
> 	style.scss
> 	_list.scss
> 
> /* sass --watch scss:css */
> 
> /* style.scss 파일 내부에서 _list.scss를 @import하고 있는 경우의 결과 */
> /scss
> style.scss
> _list.scss
> /css
> style.css
> style.css.map
> list.css
> list.css.map
> 
> /* style.scss 파일 내부에서 _list.scss를 @import하지 않고 있는 경우의 결과 */
> /scss
> 	style.scss
> 	_list.scss
> /css
> 	style.css
> 	style.css.map
> 
> ```
>
> 출처) https://stackoverflow.com/questions/34889962/why-put-in-front-of-the-file-name-or-in-scss-css

---

### setInterval에서 parameter를 받는 방법

>```javascript
>    var intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');
>
>    function myCallback(a, b) {
>        console.log(a);  // 'Parameter 1'
>        console.log(b);  // 'Parameter 2'
>    }
>```

>delay될 시간 뒤에 파라미터를 넣을 수 있다.

>출처) https://developer.mozilla.org/en-US/docs/Web/API/setInterval

---

### clearInterval 사용법

항상 다음과 같은 코드로만 `clearInterval`을 사용해왔다.

```javascript
function foo() {
  console.log("foo");
}

setInterval(foo, 100);
clearInterval(foo);
```

하지만, setInterval에 3번째 인자부터 들어가게 되는 파라미터를 활용하는 경우 다음과 같은 클리어가 동작하지 않는 문제가 생겼다.

이를 해결하는 방법는 setInterval 자체를 하나의 변수에 담아두면 된다는 것이다.

```javascript
function foo(a, b) {
  console.log(a, b);
}

const clearEvent = setInterval(foo, 100, 'a', 'b');
clearInterval(clearEvent);
```

출처) https://stackoverflow.com/questions/69602671/how-can-i-stop-setinterval

---

### MVC 패턴에 대한 이해와 고민

M(Model)

> 데이터 갱신 추가 변경 삭제 획득과 관련된 일을 수행
>
> 데이터를 획득하는 로직 (ex. ajax, localstorage) 가 포함될 수 있다.

V(View)

> DOM 조작에 집중

C(Controller)

> 가장 중요한 역할은 Model과 View를 연결하는 것
>
> 이벤트 핸들러도 이곳에서 작성하게 된다.



고민1. MVC 패턴으로 프로젝트를 구현하는 경우 하나의 컴포넌트는 총 3개의 파일을 가지게 된다. 확실히 각 파일에서 가지고 있는 절대적인 코드의 라인 수는 적어지기 때문에 안에서의 내용을 파악하기는 용이하나, 너무 많은 양의 파일들로 인한 번거로움을 느꼈다.

고민2. components 폴더 하단에 Model, View, Controller 이 3개의 폴더를 두고 관리할 것인가... 아니면 각 컴포넌트별로 폴더를 만들고 이 안에 해당 컴포넌트에 대한 Model, View, Controller 이 3개의 파일을 가지고 있게 할 것인가...

---



