import React from 'react';
export type ICheckboxContext = Omit<ReturnType<typeof useCheckboxProvider>, 'htmlProps'>;
export declare const CheckboxContext: React.Context<{}>;
export declare function useCheckboxProvider(props: any): {
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
export declare function useCheckbox(props: any): any;
export declare const useCheckboxContext: () => ICheckboxContext;
//# sourceMappingURL=context.d.ts.map