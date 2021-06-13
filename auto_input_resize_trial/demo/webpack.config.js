const path = require('path');
const MiniCss = require('mini-css-extract-plugin')
const isDevelopment = process.env.NODE_ENV === 'development'
const currentDir = __dirname;

module.exports = {
    entry: path.join(currentDir, './app.jsx'),
    output: {
        path: path.resolve(currentDir, 'dist'),
        filename: 'app.js',
    },
    devServer: {
        contentBase: currentDir,
        compress: true,
        port: 8888,
        publicPath: '/dist/'
      },
    plugins: [
        new MiniCss({
            filename: 'demo.css'
        })
    ],
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            // query  : {
            //     presets:[ 'react', 'es2015' ]
            //   }
        },
        {
            test: /\.s[ac]ss$/i,
            loader: [
                 MiniCss.loader,
                {   loader: 'css-loader',
                    options:{sourceMap: isDevelopment}
                },
                {   loader: 'sass-loader',
                    options:{sourceMap: isDevelopment}
                }
            ]
        }
      ]
    }
  };