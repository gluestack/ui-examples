import type { ViewProps } from 'react-native';
// import type { SxProps } from '@gluestack-style/react';
export interface IHStackProps extends ViewProps {
  reversed?: boolean;
  space?: string;
  ref?: any;
  children?: any;
}
