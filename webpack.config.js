const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const minimize = process.argv.indexOf('--minimize') !== -1;


module.exports = {
    mode: minimize ? "production": "development",
    entry: [path.join(__dirname, '/src/', 'app.tsx')],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'main.bundle.js',
        libraryTarget: "umd"
    },
    performance: {hints: minimize ? "warning" : false},
    optimization: {
        minimize: minimize,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", "html", "css"]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        https: false,
        index: path.join(__dirname, '/public/index.html'),
        watchContentBase: true,
        // headers: {
            //     "Access-Control-Allow-Origin" : "*",
            //     "Access-Control-Allow-Methods" : "GET, POST, DELETE, PATCH, OPTIONS",
            //     "Access-Control-Allow-Headers" : "X-Requested-With, content-type, Authorization"
            
            // }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    compilerOptions : {
                        declaration: false
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|html)$/,
                exclude: /dist\//,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            emitFile: true,
                            outputPath: path.join(__dirname, '/dist/'),
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                       loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    devtool: "cheap-eval-source-map",
    externals: {
        react :{
            root: "React",
            commonjs2: "react",
            commonjs : "react",
            amd: 'react',
            umd: 'react'
        },
        'react-dom' : {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs : "react-dom",
            amd: 'react-dom',
            umd: 'react-dom'

        }
    },
};