/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ToastContext } from './Toast';
import { Overlay } from '@gluestack-ui/overlay';
import { PresenceTransition } from '@gluestack-ui/transitions';
import { SafeAreaView } from 'react-native';
import { View, Platform } from 'react-native';
import { useKeyboardBottomInset } from '@gluestack-ui/hooks';
import type { IToast } from './types';
const initialAnimationOffset = 24;
const transitionConfig: any = {
  'bottom': initialAnimationOffset,
  'top': -initialAnimationOffset,
  'top right': -initialAnimationOffset,
  'top left': -initialAnimationOffset,
  'bottom left': initialAnimationOffset,
  'bottom right': initialAnimationOffset,
};

const toastPositionStyle = Platform.OS === 'web' ? 'fixed' : 'absolute';
const POSITIONS = {
  'top': {
    top: 0,
    left: 0,
    right: 0,
  },
  'top right': {
    top: 0,
    right: 0,
  },
  'top left': {
    top: 0,
    left: 0,
  },
  'bottom': {
    bottom: 0,
    left: 0,
    right: 0,
  },
  'bottom left': {
    bottom: 0,
    left: 0,
  },
  'bottom right': {
    bottom: 0,
    right: 0,
  },
};
export const ToastList = () => {
  const { toastInfo, visibleToasts, removeToast } =
    React.useContext(ToastContext);

  const bottomInset = useKeyboardBottomInset() * 2;
  const getPositions = () => {
    return Object.keys(toastInfo);
  };

  let hasToastOnOverlay = false;
  getPositions().map((position) => {
    if (toastInfo[position]?.length > 0) hasToastOnOverlay = true;
  });

  return getPositions().length > 0 ? (
    <Overlay isOpen={hasToastOnOverlay} isKeyboardDismissable={false}>
      {getPositions().map((position: string) => {
        if (Object.keys(POSITIONS).includes(position))
          return (
            <View
              key={position}
              pointerEvents="box-none"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                position: toastPositionStyle,
                //@ts-ignore
                ...POSITIONS[position],
              }}
            >
              {toastInfo[position].map((toast: IToast) => (
                <PresenceTransition
                  key={toast.id}
                  visible={visibleToasts[toast.id]}
                  onTransitionComplete={(status: any) => {
                    if (status === 'exited') {
                      removeToast(toast.id);
                      toast.config?.onCloseComplete &&
                        toast.config?.onCloseComplete();
                    }
                  }}
                  initial={{
                    opacity: 0,
                    translateY: transitionConfig[position],
                  }}
                >
                  <SafeAreaView pointerEvents="box-none">
                    <View
                      style={{
                        bottom:
                          ['bottom', 'bottom-left', 'bottom-right'].includes(
                            position
                          ) && toast.config?.avoidKeyboard
                            ? bottomInset
                            : undefined,
                      }}
                    >
                      {toast.component}
                    </View>
                  </SafeAreaView>
                </PresenceTransition>
              ))}
            </View>
          );
        else return null;
      })}
    </Overlay>
  ) : null;
};
