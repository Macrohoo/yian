const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  optimization: {
    minimize: false      //代码打包不压缩
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "yian.js",
    library: 'yian',  //指定类库名,主要用于直接引用的方式(比如使用script 标签)
    libraryTarget: 'umd',  //Universal Module Definition,支持在CommonJS、AMD和全局变量使用
    globalObject: 'this'  //定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
  },
  externals: {
    axios: {
      root: 'Axios',
      commonjs: 'axios',
      commonjs2: 'axios',
      amd: 'axios',
    },
    "element-ui": {
      root: 'Element-UI',
      commonjs: 'element-ui',
      commonjs2: 'element-ui',
      amd: 'element-ui',      
    },
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',      
    }
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },      
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }            
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin()
  ]  
};
