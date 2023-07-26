import React from 'react';
export type IFormControlContext = Omit<ReturnType<typeof useRadioContextProvider>, 'htmlProps'>;
export declare const FormControlContext: React.Context<{}>;
export declare function useRadioContextProvider(props: any): {
    isRequired: boolean;
    isInvalid: boolean;
    isReadOnly: boolean;
    isDisabled: boolean;
    hasFeedbackText: boolean;
    setHasFeedbackText: React.Dispatch<React.SetStateAction<boolean>>;
    hasHelpText: boolean;
    setHasHelpText: React.Dispatch<React.SetStateAction<boolean>>;
    nativeID: any;
    labelId: string;
    feedbackId: string;
    helpTextId: string;
    htmlProps: any;
};
/**
 * React hook that provides the props that should be spread on to
 * input fields (`input`, `select`, `textarea`, etc.).
 *
 * It provides a convenient way to control a form fields, validation
 * and helper text.
 */
export declare function useRadioContext(props: any): any;
export declare const useRadioContextContext: () => IFormControlContext;
//# sourceMappingURL=context.d.ts.map