/// <reference types="react" />
import type { IFormControlComponentType } from './types';
export declare const createFormControl: <Root, Error_1, ErrorText, ErrorIcon, Label, LabelText, LabelAstrick, Helper, HelperText>({ Root, Error, ErrorText, ErrorIcon, Label, LabelText, LabelAstrick, Helper, HelperText, }: {
    Root: import("react").ComponentType<Root>;
    Error: import("react").ComponentType<Error_1>;
    ErrorText: import("react").ComponentType<ErrorText>;
    ErrorIcon: import("react").ComponentType<ErrorIcon>;
    Label: import("react").ComponentType<Label>;
    LabelText: import("react").ComponentType<LabelText>;
    LabelAstrick: import("react").ComponentType<LabelAstrick>;
    Helper: import("react").ComponentType<Helper>;
    HelperText: import("react").ComponentType<HelperText>;
}) => IFormControlComponentType<Root, Error_1, ErrorText, ErrorIcon, Label, LabelText, LabelAstrick, Helper, HelperText>;
export { useFormControl, useFormControlContext } from './useFormControl';
//# sourceMappingURL=index.d.ts.map