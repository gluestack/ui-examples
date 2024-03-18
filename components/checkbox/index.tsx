import React from 'react';
import { createCheckbox } from '@gluestack-ui/checkbox';
import { View, Pressable, Text } from 'react-native';
import {
  withStates,
  withStyleContextAndStates,
  useStyleContext,
  tva,
  withStyleContext,
  cssInterop,
  VariantProps,
} from '@gluestack-ui/nativewind-utils';
import { Platform } from 'react-native';

const UICheckbox = createCheckbox({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View)
      : withStyleContextAndStates(Pressable),
  Group: withStates(View),
  Icon: withStates(View),
  Label: withStates(Text),
  Indicator: withStates(View),
});

cssInterop(UICheckbox, { className: 'style' });
cssInterop(UICheckbox.Group, { className: 'style' });
cssInterop(UICheckbox.Icon, { className: 'style' });
cssInterop(UICheckbox.Label, { className: 'style' });
cssInterop(UICheckbox.Indicator, { className: 'style' });

const checkboxStyle = tva({
  base: 'group/checkbox flex-row items-center justify-start gap-2 web:cursor-pointer data-[disabled=true]:cursor-not-allowed',
});

const checkboxIndicatorStyle = tva({
  base: 'group/checkboxInd justify-center items-center border-outline-400 bg-transparent rounded web:data-[focus-visible=true]:outline-none web:data-[focus-visible=true]:ring-2 web:data-[focus-visible=true]:ring-primary-700 data-[checked=true]:bg-primary-600 data-[checked=true]:border-primary-600 group-hover/checkbox:data-[checked=false]:border-outline-500 group-hover/checkbox:bg-transparent group-hover/checkbox:data-[invalid=true]:border-error-700 group-hover/checkbox:data-[checked=true]:bg-primary-700 group-hover/checkbox:data-[checked=true]:border-primary-700 group-hover/checkbox:data-[checked=true]:data-[disabled=true]:border-primary-600 group-hover/checkbox:data-[checked=true]:data-[disabled=true]:bg-primary-600 group-hover/checkbox:data-[checked=true]:data-[disabled=true]:opacity-40 group-hover/checkbox:data-[checked=true]:data-[disabled=true]:data-[invalid=true]:border-error-700 group-hover/checkbox:data-[disabled=true]:border-outline-400 group-hover/checkbox:data-[disabled=true]:data-[invalid=true]:border-error-700 active:data-[checked=true]:bg-primary-800 active:data-[checked=true]:border-primary-800 data-[invalid=true]:border-error-700 data-[disabled=true]:opacity-40',
  parentVariants: {
    size: {
      lg: 'w-6 h-6 border-[3px]',
      md: 'w-5 h-5 border-2',
      sm: 'w-4 h-4 border-2',
    },
  },
});

const checkboxLabelStyle = tva({
  base: 'text-typography-600 data-[checked=true]:text-typography-900 group-hover/checkbox:text-typography-900 group-hover/checkbox:data-[checked=true]:text-typography-900 group-hover/checkbox:data-[checked=true]:data-[disabled=true]:text-typography-900 group-hover/checkbox:data-[disabled=true]:text-typography-400 active:text-typography-900 active:data-[checked=true]:text-typography-900 data-[disabled=true]:opacity-40 web:select-none',
  parentVariants: {
    size: {
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
    },
  },
});

const checkboxIconStyle = tva({
  base: 'group-data-[checked=true]/checkboxInd:text-typography-0 data-[disabled=true]:opacity-40 fill-none',

  parentVariants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
  },
});

const CheckboxGroup = UICheckbox.Group;

type ICheckboxProps = React.ComponentProps<typeof UICheckbox> &
  VariantProps<typeof checkboxStyle>;
const Checkbox = React.forwardRef(
  (
    {
      className,
      size = 'md',
      ...props
    }: { className?: string } & ICheckboxProps,
    ref
  ) => {
    return (
      <UICheckbox
        className={checkboxStyle({
          class: className,
        })}
        {...props}
        context={{
          size,
        }}
        ref={ref}
      />
    );
  }
);

type ICheckboxIndicatorProps = React.ComponentProps<
  typeof UICheckbox.Indicator
> &
  VariantProps<typeof checkboxIndicatorStyle>;
const CheckboxIndicator = React.forwardRef(
  (
    { className, ...props }: { className?: string } & ICheckboxIndicatorProps,
    ref
  ) => {
    const { size: parentSize } = useStyleContext();

    return (
      <UICheckbox.Indicator
        className={checkboxIndicatorStyle({
          parentVariants: {
            size: parentSize,
          },
          class: className,
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

type ICheckboxLabelProps = React.ComponentProps<typeof UICheckbox.Label> &
  VariantProps<typeof checkboxLabelStyle>;
const CheckboxLabel = React.forwardRef(
  (
    { className, ...props }: { className?: string } & ICheckboxLabelProps,
    ref
  ) => {
    const { size: parentSize } = useStyleContext();
    return (
      <UICheckbox.Label
        className={checkboxLabelStyle({
          parentVariants: {
            size: parentSize,
          },
          class: className,
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

type ICheckboxIconProps = React.ComponentProps<typeof UICheckbox.Icon> & {
  as?: any;
};
const CheckboxIcon = React.forwardRef(
  (
    {
      className,
      as: AsComp,
      ...props
    }: ICheckboxIconProps & { className?: any },
    ref
  ) => {
    const { size: parentSize } = useStyleContext();
    if (AsComp) {
      return (
        <UICheckbox.Icon>
          <AsComp
            {...props}
            className={checkboxIconStyle({
              parentVariants: {
                size: parentSize,
              },
              class: className,
            })}
          />
        </UICheckbox.Icon>
      );
    }

    return (
      <UICheckbox.Icon
        className={checkboxIconStyle({
          parentVariants: {
            size: parentSize,
          },
          class: className,
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

// Assign display names
Checkbox.displayName = 'Checkbox';
CheckboxIndicator.displayName = 'CheckboxIndicator';
CheckboxLabel.displayName = 'CheckboxLabel';
CheckboxIcon.displayName = 'CheckboxIcon';

export {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxGroup,
};
