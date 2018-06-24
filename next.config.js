const path = require('path');
const glob = require('glob');

module.exports = {
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        name: 'dist/[path][name].[ext]'
                    }
                }
            },
            {
                test: /\.(css|scss)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    'babel-loader',
                    'raw-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['scss', 'node_modules']
                                .map(d => path.join(__dirname, d))
                                .map(g => glob.sync(g))
                                .reduce((a, c) => a.concat(c), [])
                        }
                    }
                ]
            }
           
        );
        return config;
    }
};

const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
module.exports = withCss(withSass()); 

