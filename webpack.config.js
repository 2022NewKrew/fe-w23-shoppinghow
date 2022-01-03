import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const root = process.cwd();

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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'presets': [
                            [
                                '@babel/preset-env',
                                {
                                    'targets' : '> 1.0%, not dead',
                                    'useBuiltIns': 'usage',
                                    'corejs': {'version': 3, 'proposals': true }
                                }
                            ]
                        ],
                        'plugins': []
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(root, 'src/index.html')}),
    ]
};