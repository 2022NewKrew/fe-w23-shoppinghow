# fe-w23-shoppinghow
2,3주차 프로젝트 

## Repository Tree Structure
```
json: Contains json files for databases.

output: Outputs and html files are in here.

src: Source codes (js, css)
│
├───component: Contains components in frontend.
│
├───model: Contains models which store data in frontend. Mostly implemented in observer pattern.
│
├───style: Contains styling css or scss.
│
├───app.js: Root js file in frontend.
│
├───creates.js: Contains function for creating various components.
│
└───utils.js: Contains useful util functions, such as REST API.
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

To run the app, just run the command:
```bash
npm start
```
