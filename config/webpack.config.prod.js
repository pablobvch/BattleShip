var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist')
};

module.exports = {
    context: __dirname,
    mode: 'production',
    entry: {
        app: [PATHS.src]
    },
    output: {
        path: PATHS.dist,
        filename: '[name].[chunkhash].js',
        publicPath: './'
    },
    optimization: {
        runtimeChunk: 'true',
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
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join(PATHS.src, 'favicon.ico'),
                to: path.join(PATHS.dist, 'favicon.ico')
            }
        ]),
        new HtmlWebpackPlugin({
            title: 'BattleShip Game',
            favicon: '../src/favicon.ico',
            appMountIds: ['app'],
            inject: false,
            minify: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                preserveLineBreaks: true,
                useShortDoctype: true,
                html5: true
            },
            mobile: true
        })
    ]
};
