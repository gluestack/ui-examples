import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'borderWidth': 1,
    'borderColor': '$backgroundLight300',
    'borderRadius': '$sm',
    'flexDirection': 'row',
    'overflow': 'hidden',
    'alignItems': 'center',

    ':hover': {
      borderColor: '$borderLight400',
    },

    ':focus': {
      borderColor: '$primary700',
    },

    ':disabled': {
      'opacity': 0.4,
      ':hover': {
        borderColor: '$backgroundLight300',
      },
    },

    '_input': {
      py: 'auto',
      px: '$3',
    },

    '_icon': {
      color: '$textLight400',
    },

    '_dark': {
      'borderColor': '$borderDark700',
      ':hover': {
        borderColor: '$borderDark400',
      },
      ':focus': {
        borderColor: '$primary400',
      },
      ':disabled': {
        ':hover': {
          borderColor: '$borderDark700',
        },
      },
    },

    'variants': {
      size: {
        xl: {
          h: '$12',
          _input: {
            fontSize: '$xl',
          },
          _icon: {
            h: '$4.5',
            w: '$4.5',
          },
        },
        lg: {
          h: '$11',
          _input: {
            fontSize: '$lg',
          },
          _icon: {
            h: '$4',
            w: '$4',
          },
        },
        md: {
          h: '$10',
          _input: {
            fontSize: '$md',
          },
          _icon: {
            h: '$3.5',
            w: '$3.5',
          },
        },
        sm: {
          h: '$9',
          _input: {
            fontSize: '$sm',
          },
          _icon: {
            h: '$3',
            w: '$3',
          },
        },
      },
      variant: {
        underlined: {
          '_input': {
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
            px: '$0',
          },
          'borderWidth': 0,
          'borderRadius': 0,
          'borderBottomWidth': '$1',
          ':focus': {
            'borderColor': '$primary700',
            '_web': {
              boxShadow: 'inset 0 -1px 0 0 $primary700',
            },
            ':hover': {
              borderColor: '$primary600',
              _web: {
                boxShadow: 'inset 0 -1px 0 0 $primary600',
              },
            },
          },
          ':invalid': {
            'borderBottomWidth': 2,
            'borderBottomColor': '$error600',
            '_web': {
              boxShadow: 'inset 0 -1px 0 0 $error600',
            },
            ':hover': {
              borderBottomColor: '$error600',
            },
            ':focus': {
              ':hover': {
                borderBottomColor: '$primary600',
                _web: {
                  boxShadow: 'inset 0 -1px 0 0 $primary600',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderBottomColor: '$error600',
                _web: {
                  boxShadow: 'inset 0 -1px 0 0 $error600',
                },
              },
            },
          },
          '_dark': {
            ':focus': {
              borderColor: '$primary400',
              _web: {
                boxShadow: 'inset 0 -1px 0 0 $primary400',
              },
            },
            ':invalid': {
              'borderColor': '$error400',
              '_web': {
                boxShadow: 'inset 0 -1px 0 0 $error400',
              },
              ':hover': {
                borderBottomColor: '$error400',
              },
              ':focus': {
                ':hover': {
                  borderBottomColor: '$primary400',
                  _web: {
                    boxShadow: 'inset 0 -1px 0 0 $primary400',
                  },
                },
              },

              ':disabled': {
                ':hover': {
                  borderBottomColor: '$error400',
                  _web: {
                    boxShadow: 'inset 0 -1px 0 0 $error400',
                  },
                },
              },
            },
          },
        },
        outline: {
          '_input': {
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
          },
          ':focus': {
            'borderColor': '$primary700',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $primary700',
            },
            ':hover': {
              borderColor: '$primary600',
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary600',
              },
            },
          },
          ':invalid': {
            'borderColor': '$error600',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $error600',
            },
            ':hover': {
              borderColor: '$error600',
            },
            ':focus': {
              ':hover': {
                borderColor: '$primary600',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $primary600',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderColor: '$error600',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error600',
                },
              },
            },
          },
          '_dark': {
            ':focus': {
              borderColor: '$primary400',
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary400',
              },
            },
            ':invalid': {
              'borderColor': '$error400',
              '_web': {
                boxShadow: 'inset 0 0 0 1px $error400',
              },
              ':hover': {
                borderColor: '$error400',
              },
              ':focus': {
                ':hover': {
                  borderColor: '$primary400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $primary400',
                  },
                },
              },
              ':disabled': {
                ':hover': {
                  borderColor: '$error400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $error400',
                  },
                },
              },
            },
          },
        },
        rounded: {
          'borderRadius': 999,
          '_input': {
            px: '$4',
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
          },
          ':focus': {
            'borderColor': '$primary700',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $primary700',
            },
            ':hover': {
              borderColor: '$primary600',
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary600',
              },
            },
          },
          ':invalid': {
            'borderColor': '$error600',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $error600',
            },
            ':hover': {
              borderColor: '$error600',
            },
            ':focus': {
              ':hover': {
                borderColor: '$primary600',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $primary600',
                },
              },
            },
            ':disabled': {
              ':hover': {
                borderColor: '$error600',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error600',
                },
              },
            },
          },

          '_dark': {
            ':focus': {
              borderColor: '$primary400',
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary400',
              },
            },
            ':invalid': {
              'borderColor': '$error400',
              '_web': {
                boxShadow: 'inset 0 0 0 1px $error400',
              },
              ':hover': {
                borderColor: '$error400',
              },
              ':focus': {
                ':hover': {
                  borderColor: '$primary400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $primary400',
                  },
                },
              },
              ':disabled': {
                ':hover': {
                  borderColor: '$error400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $error400',
                  },
                },
              },
            },
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
      variant: 'outline',
    },
  },

  { descendantStyle: ['_input', '_icon'] }
);
