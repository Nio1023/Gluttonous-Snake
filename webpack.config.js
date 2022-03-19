const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    watchFiles: ['./src/index.html']
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/Gluttonous-Snake/',
    filename: 'bundle.js',
    environment: {
      arrowFunction: false,
      const: false
    }
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    "chrome": "50",
                    "ie": "11"
                  },
                  "corejs": "3",
                  "useBuiltIns": "usage"
                }
              ]
            ]
          }
        },
        'ts-loader'
      ],
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [
                  "postcss-preset-env",
                  {
                    browsers: 'last 3 versions'
                  }
                ]
              ]
            }
          }
        },
        "less-loader"
      ]
    }]
  },
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // titile: 'Hello TypeScript'
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
}