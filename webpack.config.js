const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    entry: './src/index.tsx',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: './index.js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: require.resolve('babel-loader'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: true,
                            modules: true,
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './style.css'
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: './src/assets', to: './assets' }]
        }),
        new Dotenv({
            path: path.join(
                __dirname,
                isDevelopment ? './.env.development' : './.env.production'
            )
        })
    ]
};
