import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    color: 'white',
    fontWeight: 'semibold',
    fontSize: '$xl',
    display: 'flex',
    overflow: 'hidden',
    textTransform: 'uppercase',
  },
  { ancestorStyle: ['_text'], DEBUG: 'BGBGBG' }
);
