import { styled } from '@dank-style/react';

import { View } from 'react-native';
export default styled(
  View,
  {
    // py: '$1',
    // px: '$1',
    // borderRadius: 4,
    // bg: '$backgroundLight900',

    // _text: {
    //   color: '$red900',
    // },

    // _web: {
    //   shadow: '$8',
    // },

    // _dark: {
    //   bg: '$backgroundDark800',
    //   _text: {
    //     // color: '$textDark50',
    //   },
    // },

    py: '$1',
    px: '$2',
    borderRadius: 4,
    bg: '$backgroundLight800',

    _web: {
      boxShadow: '0px 1px 1.41px rgba(0, 0, 0, 0.2)',
    },

    _dark: {
      bg: '$backgroundDark50',
    },
  },
  { descendantStyle: ['_text'] }
);
