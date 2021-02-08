const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	plugins: [
		new CleanWebpackPlugin // 每次成功构建后清空目录
	]
}
