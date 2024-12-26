const autoprefixer = require('autoprefixer');

const config = {
	plugins: [require('tailwindcss'), require('postcss-simple-vars'), autoprefixer]
};

module.exports = config;
