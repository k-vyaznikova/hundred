const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, './src/index.tsx'),
    devtool: "source-map",
    //devtool: false,
    module: {
        rules: [
          {
             test: /\.(js|jsx)$/,
             exclude: /node_modules/,
             use: ['babel-loader']
          },
          {
             test: /\.(css)$/,
             use: [MiniCssExtractPlugin.loader,'css-loader']
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [new MiniCssExtractPlugin()],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
};

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.jsx'),
    devtool: "eval-source-map",
    module: {
        rules: [
          {
             test: /\.(js|jsx)$/,
             exclude: /node_modules/,
             use: ['babel-loader']
          },
          {
             test: /\.(s(a|c)ss)$/,
             use: ['style-loader','css-loader', 'sass-loader']
          },
          {
            test: /\.(sass|less|css)$/,
            use: ['style-loader', 'css-loader', 'less-loader']
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
            //type: 'asset',
            use: {
              loader: 'url-loader',
            },
          },
          /*{ 
            test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
            use: {
              loader: 'url-loader?limit=100000' 
            }  
          },*/
          {
            test: /\.mp3$/,
            type: 'asset',
          },
          
            
          
        ]
    },
    resolve: {
        extensions: ['.*', '.js', '.jsx', '.tsx', '.ts']
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    devServer: {
        // contentBase: path.resolve(__dirname, './public'),
        hot: true
    }
    
    
};


