import { Text, View } from 'react-native';
import React from 'react';
import { createFormControl } from '@gluestack-ui/form-control';
import {
  tva,
  withStyleContext,
  useStyleContext,
  cssInterop,
  VariantProps,
} from '@gluestack-ui/nativewind-utils';

const formControlStyle = tva({
  base: 'flex flex-col',
});

const formControlErrorIconStyle = tva({
  base: 'fill-none text-error-700',

  variants: {
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-4 w-4',
      'md': 'h-4.5 w-4.5',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
});

const formControlErrorStyle = tva({
  base: 'flex flex-row justify-start items-center mt-1 gap-1',
});

const formControlErrorTextStyle = tva({
  base: 'text-error-700',
  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-md',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});

const formControlHelperStyle = tva({
  base: 'flex flex-row justify-start items-center mt-1',
});

const formControlHelperTextStyle = tva({
  base: 'text-typography-500',
  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-md',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});

const formControlLabelStyle = tva({
  base: 'flex flex-row justify-start items-center mb-1',
});

const formControlLabelTextStyle = tva({
  base: 'font-medium text-typography-900',
  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-md',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});

const formControlLabelAstrickStyle = tva({
  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-md',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});

const UIFormControl = createFormControl({
  Root: withStyleContext(View),
  Error: View,
  ErrorText: Text,
  ErrorIcon: View,
  Label: View,
  LabelText: Text,
  LabelAstrick: Text,
  Helper: View,
  HelperText: Text,
});

cssInterop(UIFormControl, { className: 'style' });
cssInterop(UIFormControl.Error, { className: 'style' });
cssInterop(UIFormControl.Error.Text, { className: 'style' });
cssInterop(UIFormControl.Error.Icon, { className: 'style' });
cssInterop(UIFormControl.Label, { className: 'style' });
cssInterop(UIFormControl.Label.Text, { className: 'style' });
cssInterop(UIFormControl.Label.Astrick, { className: 'style' });
cssInterop(UIFormControl.Helper, { className: 'style' });
cssInterop(UIFormControl.Helper.Text, { className: 'style' });

type IFormControlProps = React.ComponentProps<typeof UIFormControl> &
  VariantProps<typeof formControlStyle>;
const FormControl = ({
  className,
  size = 'md',
  ...props
}: { className?: string } & IFormControlProps) => {
  return (
    <UIFormControl
      className={formControlStyle({ class: className })}
      {...props}
      context={{ size }}
    />
  );
};

type IFormControlErrorProps = React.ComponentProps<typeof UIFormControl.Error> &
  VariantProps<typeof formControlErrorStyle>;
const FormControlError = ({
  className,
  ...props
}: { className?: string } & IFormControlErrorProps) => {
  return (
    <UIFormControl.Error
      className={formControlErrorStyle({ class: className })}
      {...props}
    />
  );
};

type IFormControlErrorTextProps = React.ComponentProps<
  typeof UIFormControl.Error.Text
> &
  VariantProps<typeof formControlErrorTextStyle>;
const FormControlErrorText = ({
  className,
  size,
  ...props
}: { className?: string } & IFormControlErrorTextProps) => {
  const { size: parentSize } = useStyleContext();
  return (
    <UIFormControl.Error.Text
      className={formControlErrorTextStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
      {...props}
    />
  );
};

type IFormControlErrorIconProps = React.ComponentProps<
  typeof UIFormControl.Error.Icon
> &
  VariantProps<typeof formControlErrorIconStyle>;
const FormControlErrorIcon = ({
  className,
  size,
  as: AsComp,
  ...props
}: { className?: string } & IFormControlErrorIconProps) => {
  const { size: parentSize } = useStyleContext();
  if (AsComp) {
    return (
      <AsComp
        className={formControlErrorIconStyle({
          parentVariants: { size: parentSize },
          size,
          class: className,
        })}
        {...props}
      />
    );
  }
  return (
    <UIFormControl.Error.Icon
      className={formControlErrorIconStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
      {...props}
    />
  );
};

type IFormControlLabelProps = React.ComponentProps<typeof UIFormControl.Label> &
  VariantProps<typeof formControlLabelStyle>;
const FormControlLabel = ({
  className,
  ...props
}: { className?: string } & IFormControlLabelProps) => {
  return (
    <UIFormControl.Label
      className={formControlLabelStyle({ class: className })}
      {...props}
    />
  );
};

type IFormControlLabelTextProps = React.ComponentProps<
  typeof UIFormControl.Label.Text
> &
  VariantProps<typeof formControlLabelTextStyle>;
const FormControlLabelText = ({
  className,
  size,
  ...props
}: { className?: string } & IFormControlLabelTextProps) => {
  const { size: parentSize } = useStyleContext();

  return (
    <UIFormControl.Label.Text
      className={formControlLabelTextStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
      {...props}
    />
  );
};

type IFormControlLabelAstrickProps = React.ComponentProps<
  typeof UIFormControl.Label.Astrick
> &
  VariantProps<typeof formControlLabelAstrickStyle>;
const FormControlLabelAstrick = ({
  className,
  size,
  ...props
}: { className?: string } & IFormControlLabelAstrickProps) => {
  const { size: parentSize } = useStyleContext();

  return (
    <UIFormControl.Label.Astrick
      className={formControlLabelAstrickStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
      {...props}
    />
  );
};

type IFormControlHelperProps = React.ComponentProps<
  typeof UIFormControl.Helper
> &
  VariantProps<typeof formControlHelperStyle>;
const FormControlHelper = ({
  className,
  ...props
}: { className?: string } & IFormControlHelperProps) => {
  return (
    <UIFormControl.Helper
      className={formControlHelperStyle({
        class: className,
      })}
      {...props}
    />
  );
};

type IFormControlHelperTextProps = React.ComponentProps<
  typeof UIFormControl.Helper.Text
> &
  VariantProps<typeof formControlHelperTextStyle>;
const FormControlHelperText = ({
  className,
  size,
  ...props
}: { className?: string } & IFormControlHelperTextProps) => {
  const { size: parentSize } = useStyleContext();

  return (
    <UIFormControl.Helper.Text
      className={formControlHelperTextStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
      {...props}
    />
  );
};
FormControl.displayName = 'FormControl';
FormControlError.displayName = 'FormControlError';
FormControlErrorText.displayName = 'FormControlErrorText';
FormControlErrorIcon.displayName = 'FormControlErrorIcon';
FormControlLabel.displayName = 'FormControlLabel';
FormControlLabelText.displayName = 'FormControlLabelText';
FormControlLabelAstrick.displayName = 'FormControlLabelAstrick';
FormControlHelper.displayName = 'FormControlHelper';
FormControlHelperText.displayName = 'FormControlHelperText';

export {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  FormControlLabelAstrick,
  FormControlHelper,
  FormControlHelperText,
};
