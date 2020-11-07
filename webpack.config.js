const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//process.env.NODE_ENV = process.env.NODE_ENV ||'development'
process.env.NODE_ENV ='production'

module.exports = (env) =>{
    const isProduction = (env === 'production');
 
   // console.log(env);
    return {
        entry:'./src/app.js',
    output: {
        path:path.join(__dirname,'public','dist'),
        filename: 'bundle.js'
    },
    mode:'development',
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            }
            
        },
        {
            test: /\.s?css$/,
            use:[

              {
                loader: MiniCssExtractPlugin.loader,
               
              },
              //'css-loader',
             // 'sass-loader,
             {
                loader:'css-loader', 
                options:{
                    sourceMap: true
                } 
            },
            {
                loader:'sass-loader', 
                options:{
                    sourceMap: true
                }    
            }

            ] 
        }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
    ],
    devtool: isProduction ?'source-map':'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public'),
        publicPath: '/',
        historyApiFallback: true,
    }
}}