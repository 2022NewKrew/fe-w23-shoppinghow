const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const nunjucks = require('nunjucks')

const app = express()
const config = require('./webpack.config')
const compiler = webpack(config)

const port = 3000

const jsonRouter = require('./server/router/jsonRouter')
const searchRouter = require('./server/router/searchRouter')
const path = require('path')

nunjucks.configure('dist', {
    autoescape: true,
    express: app
})

app.use(express.static(path.join(__dirname, 'dist')))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV === 'production') {
    app.use('/index', express.static('./dist'))
    app.get('/index', (req, res) => {
        res.render('index.html')
    })
} else if (process.env.NODE_ENV === 'development') {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }))
}

app.use('/json', jsonRouter)
app.use('/search', searchRouter)

app.listen(port, () => {
    console.log(`server is listening at localhost:${ port }`)
})

module.exports = app