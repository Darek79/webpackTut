const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.[contenthash].js',
            path: path.resolve(__dirname, './dist'),
            publicPath: ''
        },
        mode: 'none',
        module: {
            rules: [{
                    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']

                },
                {
                    test: /\.scss$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                        presets: ['@babel/preset-env']
                        }
                    }
                
                },
                {
                    test: /\.hbs$/,
                    use: [
                        'handlebars-loader'
                    ]
                }


                ]
            },
            plugins: [ 
            new UglifyJsPlugin(),
            new MiniCssExtractPlugin({
                filename: 'styles.[contenthash].css'
            }),
            new CleanWebpackPlugin('dist'),
            new HtmlWebpackPlugin({
                title: 'my page',
                template: 'src/index.hbs',
                description: 'some desc'
                
            })  
            ]
        }