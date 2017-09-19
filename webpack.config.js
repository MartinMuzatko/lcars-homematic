var webpack = require('webpack')

module.exports = {
    entry: './index.js',
    output: {
        path: './',
        filename: './js/[name].js',
        sourceMapFilename: "./js/[name].js.map",
    },
    module: {
        preLoaders: [
            { test: /\.html$/, loader: 'riotjs' },
            { test: /\.js$/, loader: 'source-map' },
        ],
        loaders: [
            { test: /\.(jpe?g|png|gif|mp4)$/i, loader: 'file?name=img/[name].[ext]'},
            { test: /fonts\/.*\.(woff|eot|svg|otf|ttf)$/i, loader: `file?name=fonts/[name].[ext]`},
            { test: /sounds\/.*\.(wav|mp3)$/i, loader: `file?name=sounds/[name].[ext]`},
            { test: /\.js|\.html$/, loader: 'babel', query: { presets: 'es2015-riot' }},
            { test: /\.scss$/, loader: 'style!css!sass'},
            { test: /\.less$/, loader: 'style!css!less'},
            { test: /\.json$/, loader: 'json'},
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        })
    ],
    devServer: {
        port: 8080,
        inline: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    eslint: {
        configFile: './.eslintrc'
    },
    devtool: 'source-map'
}
