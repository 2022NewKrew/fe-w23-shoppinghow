import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const root = path.resolve();

export default {
    mode: 'development',
    entry: path.resolve(root, 'src/app.js'),
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(root, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'presets': [
                            [
                                '@babel/preset-env',
                                {
                                    'targets' : '> 0.25%, not dead',
                                    'useBuiltIns': 'usage',
                                    'corejs': {'version': 3, 'proposals': true }
                                }
                            ]
                        ],
                        'plugins': [],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                    }
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(root, 'src/index.html')}),
        new MiniCssExtractPlugin({filename: 'style.css'}),
    ]
};