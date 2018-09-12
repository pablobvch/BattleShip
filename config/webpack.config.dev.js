const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist')
};

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: {
        app: [PATHS.src]
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'all'
                }
            }
        }
    },
    devtool: 'eval-sourcemap',
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join(PATHS.src, 'favicon.ico'),
                to: path.join(PATHS.dist, 'favicon.ico')
            },
            {
                from: path.join(PATHS.src, 'london.html'),
                to: path.join(PATHS.dist, 'london.html')
            },
            {
                from: path.join(PATHS.src, 'paris.html'),
                to: path.join(PATHS.dist, 'paris.html')
            },
            ,
            {
                from: path.join(PATHS.src, 'main.html'),
                to: path.join(PATHS.dist, 'main.html')
            }
        ]),
        new HtmlWebpackPlugin({
            title: 'BattleShip Game',
            template: '../src/index.ejs',
            favicon: '../src/favicon.ico',
            minify: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                preserveLineBreaks: true,
                useShortDoctype: true,
                html5: true
            },
            appMountIds: ['app'],
            mobile: true
        })
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
    devServer: {
        contentBase: PATHS.dist,
        compress: true,
        headers: {
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY'
        },
        open: true,
        overlay: {
            warnings: true,
            errors: true
        },
        historyApiFallback: true,
        port: 8080,
        publicPath: 'http://localhost:8080/'
    },
    stats: {
        children: false
    }
};
