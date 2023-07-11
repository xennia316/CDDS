module.exports = function (api) {
	api.cache(true);

	return {
		presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
		plugins: [],
		plugins: [
			"nativewind/babel",
			["dotenv-import", { moduleName: "@env", path: ".env" }],
		],
	};
};
