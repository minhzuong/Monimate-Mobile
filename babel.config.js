module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
        alias: {
          "@src": "./src",
          "@theme": "./src/shared/theme",
          "@hooks": "./src/shared/hooks",
          "@features": "./src/features"
        }
      },
      'react-native-reanimated/plugin',
    ],
  ]
};
