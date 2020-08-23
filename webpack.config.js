const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: './src/app.ts',
    target: "node",
    node: {
        __dirname: true
    },
    output: {
        publicPath: './public/images/',
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", '.json'],
        alias: {
            Public: path.resolve(__dirname, 'public')
        }
    },
    module: {
        rules: [
            { 
                test: /\.ts?$/, 
                loader: "ts-loader" 
            },
            { 
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: "eslint-loader" 
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                        loader: 'babel-loader',
                        options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                }          
            },
        ]
    },
    plugins: [
        new Dotenv()
    ]
};
