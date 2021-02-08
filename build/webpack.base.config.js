const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.ts', // 指定入口文件
	output: {
		filename: 'app.js' // 输出的文件名为app.js
	},
	resolve: {
		extensions: ['.js', '.ts', 'tsx'] // 输出的目录是默认的，输出的扩展名，js,ts,tsx
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/i, // 正则以ts或者tsx为结尾的文件
				use: [{
					loader: 'ts-loader', // 使用ts-loader, npm i ts-loader typescript -D
				}],
				exclude: /node_modules/ // 排除node_modules文件
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ // 插件,通过一个模板帮助我们生成网站的一个首页并把输出文件自动嵌入文件中
			template: "./src/tpl/index.html" // npm i html-webpack-plugin -D
		})
	]
}
