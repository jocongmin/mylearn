module.exports = {
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
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
        ]
    }
};
/*module.exports = {
    entry: {
        jsone: "./js/index.js",
        jstwo:'./js/index2.js'
    },
    output: {
        filename: "./jsm/[name].js"
    }
}*/
