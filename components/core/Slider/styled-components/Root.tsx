import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'h': 4,
    'alignItems': 'center',
    'justifyContent': 'center',
    'position': 'relative',

    'variants': {
      size: {
        'sm:': {
          _thumb: {
            h: '$4',
            w: '$4',
          },
        },
        'md': {
          _thumb: {
            h: '$5',
            w: '$5',
          },
        },
        'lg': {
          _thumb: {
            h: '$6',
            w: '$6',
          },
        },
      },
    },
    'defaultProps': {
      size: 'sm:',
    },
    ':disabled': {
      opacity: 0.4,
    },

    '_web': {
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  {
    descendantStyle: ['_thumb'],
  }
);
