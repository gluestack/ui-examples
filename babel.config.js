// const myBabel = require('@gluestack-style/babel-plugin-styled-resolver');
const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // [
      //   // myBabel,
      //   {
      //     configPath: path.join(__dirname, './gluestack-ui.config.ts'),
      //   },
      // ],
      [
        'module-resolver',
        {
          alias: {
            // For development, we want to alias the library to the source
            ['@gluestack-style/react']: path.join(
              __dirname,
              '../../packages/react/src'
            ),
            ['@gluestack-style/animation-plugin']: path.join(
              __dirname,
              '../../packages/animation-plugin/src'
            ),

            // ['@dank-style/react']: path.join(
            //   __dirname,
            //   '../../packages/react/src'
            // ),
            // ['@gluestack-style/animation-plugin']: path.join(
            //   __dirname,
            //   '../../packages/animation-plugin/src'
            // ),
            // ['@dank-style/animation-plugin']: path.join(
            //   __dirname,
            //   '../../packages/animation-plugin/src'
            // ),
          },
        },
      ],
    ],
  };
};
