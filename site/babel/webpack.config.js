const path = require('path');

var config = {
    mode: 'none', //  'production', // 'none',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/, // test: /(\.scss|\.css)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, '../static/js'),
        filename: 'main-editor.js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        ignored: ['node_modules'],
        poll: 1000
    }
};

var galleryConfig = Object.assign({}, config, {
    name: 'gallery-app',
    entry: './app/gallery-app.js',
    output: {
        path: path.resolve(__dirname, '../static/js'),
        filename: 'gallery-app.js'
    },
});

var editConfig = Object.assign({}, config,{
    name: 'main-editor',
    entry: './app/gallery-editor.js',
    output: {
        path: path.resolve(__dirname, '../static/js'),
        filename: 'gallery-editor.js'
    },
});



// Return Array of Configurations
module.exports = [
    galleryConfig, editConfig
];
