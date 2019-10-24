const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, options) => {
  const devMode = options.mode !== 'production'

  return {
    context: path.resolve(__dirname, 'src'),
    mode: options.mode,
    entry: {
      gs: './ts/index.ts'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      publicPath: '/'
    },
    devtool: devMode ? 'cheap-module-eval-source-map' : false,
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        },
        {
          test: /\.(ts|js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }],
              '@babel/preset-typescript'
            ]
          }
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src', 'index.html'),
        inject: false
      }),
      new CleanWebpackPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      noInfo: true,
      overlay: true
    }
  }
}
