module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: 'custom-button.js',
        library: 'custom-button',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]

}