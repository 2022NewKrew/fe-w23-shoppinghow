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

## DOM 조작을 위한 메서드들

> DOM만 반환하는 메서드가 있는 반면, DOM이외의 text라는 보통 필요없는 요소를 뱉는 메서드들도 있다. 때문에 이들을 구분하여 사용할 필요가 있다.

---

### 자식 노드 탐색

```html
<!--> 기본틀 <-->
<body>
    <ul id="fruits">
        <li class="apple">apple</li>
        <li class="banana">banana</li>
        <li class="orange">orange</li>
    </ul>
</body>
<script>
    const $fruits = document.querySelector("#fruits");
</script>
```

- Node.prototype.childNodes ( 텍스트 노드가 포함될 가능성 O )

  ```javascript
  console.log($fruits.childNodes);
  // NodeList(7) [text, li.apple, text, li.banana, text, li.orange, text]
  ```

- Element.prototype.children ( 텍스트 노드가 포함될 가능성 X )

  ```javascript
  console.log($fruits.children);
  // HTMLCollection(3) [li.apple, li.banana, li.orange]
  ```

- Node.prototype.firstChild ( 텍스트 노드가 포함될 가능성 O )

  ```javascript
  console.log($fruits.firstChild);
  // #text
  ```

- Element.prototype.firstElementChild ( 텍스트 노드가 포함될 가능성 X )

  ```javascript
  console.log($fruits.firstElementChild);
  // li.apple
  ```

- Node.prototype.lastChild ( 텍스트 노드가 포함될 가능성 O )

  ```javascript
  console.log($fruits.lastChild);
  // #text
  ```

- Element.prototype.lastElementChild ( 텍스트 노드가 포함될 가능성 X )

  ```javascript
  console.log($fruits.lastElementChild);
  // li.orange
  ```

---
### 자식 노드 존재 확인

```html
<!--> 기본틀 <-->
<body>
    <ul id="fruits"></ul>
</body>
<script>
    const $fruits = document.querySelector("#fruits");
</script>
```

- Node.prototype.hasChildNodes ( 텍스트 노드가 포함될 가능성 O )

  ```javascript
  console.log($fruits.hasChildNodes())
  // true (텍스트 노드가 잡히기 때문)
  ```

- Element.prototype.children의 length를 확인하는법

  ```javascript
  console.log($fruits.children.length)
  // 0
  ```

- Element.prototype.childElementCount

  ```javascript
  console.log($fruits.childElementCount);
  // 0
  ```

---

### 부모 노드 탐색

```html
<!--> 기본틀 <-->
<body>
    <ul id="fruits">
  		<li class="apple">Apple</li>
      <li class="banana">Banana</li>
      <li class="orange">Orange</li>
    </ul>
</body>
<script>
    const $banana = document.querySelector(".banana");
</script>
```

- Node.prototype.parentNode

  ```javascript
  console.log($banana.parentNode);
  // ul#fruits
  ```

---

### 형제 노드 탐색

```html
<!--> 기본틀 <-->
<body>
    <ul id="fruits">
  		<li class="apple">Apple</li>
      <li class="banana">Banana</li>
      <li class="orange">Orange</li>
    </ul>
</body>
<script>
    const $fruits = document.querySelector("#fruits");
</script>
```

- Node.prototype.previousSibling ( 텍스트 노드가 포함될 가능성 O )

- Node.prototype.nextSibling ( 텍스트 노드가 포함될 가능성 O )

  ```javascript
  const { firstChild } = $fruits;
  console.log(firstChild);
  // #text
  
  const { nextSibling } = firstChild;
  console.log(nextSibling);
  // li.apple
  
  const { previousSibling } = nextSibling;
  console.log(previousSibling);
  // #text
  ```

- Element.prototype.previousElementSibling ( 텍스트 노드가 포함될 가능성 X )

- Element.prototype.nextElementSibling ( 텍스트 노드가 포함될 가능성 X )

  ```javascript
  const { firstElementChild } = $fruits;
  console.log(firstElementChild);
  // li.apple
  
  const { nextElementSibling } = firstElementChild;
  console.log(nextElementSibling);
  // li.banana
  
  const { previousElementSibling } = nextElementSibling;
  console.log(previousElementSibling);
  // li.apple
  ```

---

## recursive setTimeout vs setInterval

> 크롱께서 설명해주신 개념을 더 학습하여 정리해보았습니다.

자바스크립트는 일정한 시간이 흐른 뒤에 비동기적 코드를 실행할 수 있게하는 다양한 메서드들을 제공한다.

- `setTimeout()`

  > 특정 시간이 경과한 뒤에 특정 코드블록을 한번 실행한다.

- `setInterval()`

  > 각각의 호출 간에 일정한 시간 간격으로 특정 코드블록을 반복적으로 실행한다.

- `requestAnimationFrame()`

  > `setInterval()` 의 최신 버전. 
  >
  > 모든 DOM 조작이나 애니메이션은 이 DOM API를 기반으로 해야 한다. 해당 콜백 내에서 DOM 작업을 수행하면 더 효율적이다. 메인 스레드를 차단하지 않으며 repaint가 이벤트 루프에서 스케줄링되기 직전에 실행된다.
  >
  > 빠르게 반복되면서 화면이 다시 그려질 때 사용함. 브라우저가 매번 화면을 다시 그리는데 변화된 화면을 그릴 준비가 되었을 때 실행. 과거에는 setInterval()을 통해 해당 기능을 수행했었는데, 프레임 손실 혹은 모바일 환경에서의 배터리 효율면에서 문제가 존재했다.



### setTimeout()

setTimeout() 은 지정된 시간이 경과한 후 특정 코드 블록을 한 번 실행한다. 이때, 지정된 시간이 지난 후에 해당 코드 블록이 실행될 것이라는 보장은 존재하지 않는다. 최소한의 시간을 보장하는 것이다.

다음과 같이 setTimeout을 등록하거나 해제할 수 있다.

```javascript
function sayHi(who) {
  alert(`Hello I'm ${who}`);
}

// setTimeout의 3번째부터 들어오는 인자들은 첫번째 인자로 들어오는 콜백 함수의 argument로 이용된다.
const myGreeting = setTimeout(sayHi, 2000, 'dongkyun');

// setTimeout이 반환하는 값을 추후에 clear하면 된다.
clearTimeout(myGreeting);
```



### setInterval()

일정 시간이 지난 후 코드를 단 한번만 실행해야 한다면 `setTimeout()` 을 사용한다. 코드를 반복적으로 실행해야 하는 경우에는 어떻게 할까?

이때 사용하는 메서드가 `setInterval()` 이다. `setInterval()` 은 아무 조치를 취하지 않으면 끊임없이 계속 실행된다. 이를 중지하기 위해서는 `clearInterval()` 을 사용하면 된다.

```javascript
const myInterval = setInterval(myFunction, 2000);

clearInterval(myInterval);
```



이러한 `setInterval()` 의 기능은 `setTimeout()` 을 재귀적으로 동작시켜 동일하게 구현해낼 수 있다.

다음 두 예제는 굉장히 비슷한 결과를 만들어낸다.

```javascript
let i = 1;

setTimeout(function run() {
  console.log(i);
  i++;
  setTimeout(run, 100);
}, 100);
```

```javascript
let i = 1;

setInterval(function run() {
  console.log(i);
  i++;
}, 100);
```

두 방식은 굉장히 유사하면서도 미묘한 차이를 가진다.

- `recursive setTimeout`은 실행과 실행 사이에 동일한 지연을 보장한다. 위의 경우 100ms이다. 코드가 실행된 후 다시 실행되기 전에 100ms 동안 대기하므로 간격은 코드 실행 시간과는 상관없이 동일하다.
- `setInterval`을 사용하는 예제는 약간 다르게 작동한다. 설정된 간격(100ms)에는 실행하려는 코드를 실행하는데 걸리는 시간이 포함된다. 코드를 실행하는데 40ms가 걸린다면 다음 코드가 실행되기까지의 간격은 60ms가 된다.

코드가 지정한 시간 간격보다 실행 시간이 오래 걸리면 `recursive setTimeout`을 사용하는 것이 좋다. 이 방법은 코드의 실행시간과는 관계없이 실행 간격이 일정하게 유지되어 오류가 발생하지 않는다.



사실 `clearTimeout()` 으로 `setInterval()` 을 지울 수도, `clearInterval()` 로 `setTimeout()` 을 지울 수 있다.



출처) https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals

---

### 클래스 내부 addEventListener에서 bind 사용하기

> fleek의 세미나를 까먹기 전에 정리해봤습니다. 좋은 세미나 내용 정말 감사합니다!!

다음과 같은 HTML 코드가 있다고 가정한다.

```html
<h1 id="title">TODO List</h1>
```

해당 코드에 이벤트를 붙이는 방법은 다양하지만 그 중에서 2가지를 확인한다.

1. 익명함수

   ```javascript
   const $title = document.querySelector("#title");
   this.$title.addEventListener("click", function () {
     alert(this.innerText);  // TODO List
   })
   ```

2. 함수를 인자로 받기

   ```javascript
   $title.addEventListener("click", alertValue);
   function alertValue() {
     alert("TODO List");
   }
   ```

이 경우 두가지 방식 모두 정상적으로 작동하는 것을 확인할 수 있다.

하지만 class에서 addEventListener를 사용할 때는 이야기가 다르다.

```html
<body>
    <h1 id="title">TODO List</h1>
</body>
<script>
    class Todo { 
        constructor($target) { 
            document.querySelector("#title").addEventListener("click", function () {
                this.alertValue;
            });
        } 
 
        alertValue() { 
            alert("hello");
        }
    }

    const a = new Todo();
</script>
```

`constructor` 내부의 `addEventListner`를 호출하는 대상은 `document.querySelector("#title")` 이다. 즉 `addEventListener` 내부의 this는 `document.querySelector("#title")` 을 가리키게 된다. 

여기서의 문제는 addEventListener 내부에서 `this.alertValue` 를 호출하고 있다는 점이다. `alertValue`가 정상적으로 호출되기 위해서는 this가 Todo라는 객체여야 한다. `addEventListener` 외부와 내부의 this 바인딩이 다르기 때문에 해당 코드는 에러를 뱉게 된다.

이를 해결하는 방법

1. 화살표 함수
2. this 바인딩

--- 

### `--save` vs `--save-dev`

어떠한 옵션을 사용하냐에 따라 package.json 파일의 dependencies에 기록될지, devDependencies에 기록될지가 결정된다.
참고한 문서에서는 다음과 같은 기준으로 이들을 분리하라고 한다.

**cannot run without it** 즉, 해당 라이브러리 없이는 애플리케이션이 동작할 수 없다면 dependencies로, 해당 라이브러리가 없어도 동작은 할 수 있지만 편의를 위해
사용하는 라이브러리라면 devDependencies에 추가하라는 말이었다.
