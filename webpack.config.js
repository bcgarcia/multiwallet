const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    devtool: 'cheap-module-eval-souce-map',
    resolve: {
        // extensiones que queremos que lea webpack
        extensions: ['.js', '.jsx'],

        // indicamos donde van a estar los modulos usados por la app
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ]
    },
    //configurar ficheros de entrada.
    entry: [
        // configuracion a realizar para que webpack implemente el server y el hot reloading
        //hotreloading => cada vez que cambiemos algo webpack lo volcará directamente
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index.jsx')
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    // definicion de modulos (webpack2)
    module: {

        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: { // indicamos los transpiladores que queremos usar
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                use: 'url-loader?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    plugins: [

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'Tether': 'tether',
            Popper: ['popper.js', 'default'],
            // In case you imported plugins individually, you must also require them here:
            //Util: "exports-loader?Util!bootstrap/js/dist/util",
            //Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: "multiwallet",
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ],
    devServer: { // servidor de desarrollo en prod no haría falta
        host: '0.0.0.0',
        hot: true,
        port: 8080,
        inline: true,
        contentBase: path.join(__dirname, 'src'),
        historyApiFallback: true, // hace que las rutas puestas a mano en el navegador funcionen
    }

}
