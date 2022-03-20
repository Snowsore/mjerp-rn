module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./src",
            "@components": "./src/components",
            "@contexts": "./src/contexts",
            "@js": "./src/js",
          },
        },
      ],
    ],
  };
};
