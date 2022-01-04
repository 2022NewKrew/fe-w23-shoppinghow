const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    devServer: {
        static: "./build",
        hot: true,
    },
    mode: "development",
    devtool: "inline-source-map", // 소스 맵을 이용해 배포용 파일의 특정 부분이 원본 소스의 어떤 부분인지 확인한다.
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 600, // 빌드 후 600ms간 watch를 딜레이 한다.
        poll: 1000, // 1초마다 변화를 감지한다.
    },
});
