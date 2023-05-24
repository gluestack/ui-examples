import { Pressable } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Pressable,
  {
    'flexDirection': 'row',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    '_icon': {
      color: '$primary600',
    },
    'variants': {
      size: {
        lg: {
          _icon: {
            height: '$5',
            width: '$5',
          },

          _text: {
            fontSize: '$lg',
          },

          _indicator: {
            h: '$6',
            w: '$6',
          },
        },
        md: {
          _icon: {
            height: '$4',
            width: '$4',
          },

          _text: {
            fontSize: '$md',
          },

          _indicator: {
            h: '$5',
            w: '$5',
          },
        },
        sm: {
          _icon: {
            height: '$3',
            width: '$3',
          },
          _text: {
            fontSize: '$sm',
          },
          _indicator: {
            borderRadius: 2,
            h: '$4',
            w: '$4',
          },
        },
      },
    },
    'defaultProps': {
      size: 'md',
    },
    ':disabled': {
      opacity: 0.6,
    },
  },
  {
    descendantStyle: ['_icon', '_text', '_indicator'],
  }
);
