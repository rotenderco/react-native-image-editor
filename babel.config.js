module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@rotender/image-editor': './lib/ImageEditor',
        },
        cwd: 'babelrc',
      },
    ],
  ],
};
