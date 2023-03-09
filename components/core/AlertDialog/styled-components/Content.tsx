import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    shadowColor: '$backgroundLight800',
    bg: '$backgroundLight50',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    rounded: '$lg',
    overflow: 'hidden',

    _dark: {
      bg: '$backgroundDark900',
    },
  },
  { ancestorStyle: ['_content'] }
);
