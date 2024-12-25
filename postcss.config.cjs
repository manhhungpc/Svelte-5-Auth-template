const autoprefixer = require("autoprefixer");

const config = {
	plugins: [
		require("postcss-simple-vars"),
		autoprefixer,
	],
};

module.exports = config;