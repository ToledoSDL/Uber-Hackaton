module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: ['eslint:recommended'],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error'],
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'no-fallthrough': 'off',
		'no-sparse-arrays': 'off',
		'no-inner-declarations': 'off',
		'no-useless-escape': 'off',
		'no-constant-condition': 'off',
	},
};
