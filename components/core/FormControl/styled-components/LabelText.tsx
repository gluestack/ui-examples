import { styled } from '@dank-style/react';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    // fontSize: '$sm',
    fontWeight: '$medium',
    color: '$textLight500',

    _dark: {
      color: '$textDark400',
    },
  },
  { ancestorStyle: ['_labelText'] }
);
