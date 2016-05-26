/*module.exports = {
    //插件项
    //页面入口文件配置
    entry: {
        main: "./build/main.js",
    },
    output: {
        filename: "./js/all.js"
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(js|es6)$/, exclude: /node_modules/, loader: 'babel'},
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
        ]
    }
};
*/


var webpack = require('webpack');
module.exports = {
  entry: './build/test.js',

  output: {
    filename: './js/test.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      {test: /\.scss$/, loader: "style!css!sass"},
      {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
    ]
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ] : [],
}