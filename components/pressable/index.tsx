import React from 'react';
import { createPressable } from '@gluestack-ui/pressable';
import { Pressable as RNPressable, Platform } from 'react-native';

import {
  tva,
  withStyleContextAndStates,
  withStyleContext,
  cssInterop,
  VariantProps,
} from '@gluestack-ui/nativewind-utils';

const UIPressable = createPressable({
  Root:
    Platform.OS === 'web'
      ? withStyleContext(RNPressable)
      : withStyleContextAndStates(RNPressable),
});

const pressableStyle = tva({
  base: 'data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-primary-700 data-[focus-visible=true]:ring-2 data-[disabled=true]:opacity-40',
});

cssInterop(UIPressable, { className: 'style' });

type IPressableProps = Omit<
  React.ComponentProps<typeof UIPressable>,
  'context'
> &
  VariantProps<typeof pressableStyle>;
const Pressable = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IPressableProps,
    ref?: any
  ) => {
    return (
      <UIPressable
      {...props}
      ref={ref}
      className={pressableStyle({
        class: className,
      })}      />
    );
  }
);

Pressable.displayName = 'Pressable';
export { Pressable };
