# fe-w23-shoppinghow
2,3주차 프로젝트 

## Repository Tree Structure
```
json: Contains json files for databases.

output: Outputs and html files are in here.

src: Source codes (js, css)
```

## How to Run
[**index.js**](index.js) is the nodejs script file
which runs `expressjs` that serves as
backend server. **NOTE** that this also
serves frontend outputs.

[**app.js**](src/app.js) is the js script file
that is the root of the script files that is
embedded in html file. `Webpack` transpiles them
into single js file with `babel-loader`.
