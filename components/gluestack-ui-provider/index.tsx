import React from 'react';
import { Platform, View } from 'react-native';

// Change the config file path
import { config } from './config';

const providerStyle = Platform.select({
  web: {
    flex: 1,
    height: '100vh',
    width: '100vw',
  },
  android: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  ios: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export function GluestackUIProvider({
  mode,
  ...props
}: {
  mode?: 'light' | 'dark';
  children: any;
}) {
  // @ts-ignore
  return (
    <View
      style={[
        mode ? config[mode] : config['light'],
        providerStyle,
        // @ts-ignore
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
}