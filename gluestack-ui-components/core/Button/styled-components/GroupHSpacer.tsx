import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      space: {
        xs: {
          w: 4,
        },
        sm: {
          w: 6,
        },
        md: {
          w: 8,
        },
        lg: {
          w: 8,
        },
      },
    },
  },
  { ancestorStyle: ['_groupHSpacer'] }
);
