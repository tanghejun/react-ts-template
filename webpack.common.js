const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[hash:12].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.less', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }, {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', 'ts-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'wala',
      template: 'index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
