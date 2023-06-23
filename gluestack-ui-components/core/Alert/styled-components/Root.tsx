import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    alignItems: 'flex-start',
    w: '100%',
    p: '$3',
    flexDirection: 'row',
    borderRadius: '$sm',
    variants: {
      action: {
        error: {
          bg: '$backgroundLightError',
          borderColor: '$error300',
          _icon: {
            color: '$error500',
          },
          _dark: {
            bg: '$backgroundDarkError',
            borderColor: '$error700',
            _icon: {
              color: '$error500',
            },
          },
        },
        warning: {
          bg: '$backgroundLightWarning',
          borderColor: '$warning300',
          _icon: {
            color: '$warning500',
          },
          _dark: {
            bg: '$backgroundDarkWarning',
            borderColor: '$warning700',
            _icon: {
              color: '$warning500',
            },
          },
        },
        success: {
          bg: '$backgroundLightSuccess',
          borderColor: '$success300',
          _icon: {
            color: '$success500',
          },
          _dark: {
            bg: '$backgroundDarkSuccess',
            borderColor: '$success700',
            _icon: {
              color: '$success500',
            },
          },
        },
        info: {
          bg: '$backgroundLightInfo',
          borderColor: '$info300',
          _icon: {
            color: '$info500',
          },
          _dark: {
            bg: '$backgroundDarkInfo',
            borderColor: '$info700',
            _icon: {
              color: '$info500',
            },
          },
        },
        muted: {
          bg: '$backgroundLightMuted',
          borderColor: '$secondary300',
          _icon: {
            color: '$secondary500',
          },
          _dark: {
            bg: '$backgroundDarkMuted',
            borderColor: '$secondary700',
            _icon: {
              color: '$secondary500',
            },
          },
        },
      },

      variant: {
        solid: {},
        outline: {
          borderWidth: '$1',
          bg: '$white',
          _dark: {
            bg: '$black',
          },
        },
        accent: {
          borderLeftWidth: '$4',
        },
      },
    },

    defaultProps: {
      variant: 'solid',
      action: 'info',
    },
  },
  { descendantStyle: ['_icon', '_text'], DEBUG: 'STYLED_ALERT' }
);
