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


<br/>

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
