import React from 'react';
// import { useId } from '@react-native-aria/utils';
import { ariaAttr } from '@gluestack-ui/utils';
export const FormControlContext = /*#__PURE__*/React.createContext({});
export function useFormControlProvider(props) {
  const {
    nativeID: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;
  var idCounter = 0;
  function uniqueId() {
    let prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var id = ++idCounter;
    return prefix + id;
  }
  const id = uniqueId();
  // const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  // const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;

  // if (!disableCSSMediaQueries) {
  //   // This if statement technically breaks the rules of hooks, but is safe
  //   // because the condition never changes after mounting.
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   id = useId();
  // }

  // const id = '';
  // Generate all the required ids
  const nativeID = idProp || `field-${id}`;
  const labelId = `${nativeID}-label`;
  const feedbackId = `${nativeID}-feedback`;
  const helpTextId = `${nativeID}-helptext`;

  /**
   * Track whether the `FormErrorMessage` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  const [hasFeedbackText, setHasFeedbackText] = React.useState(false);

  /**
   * Track whether the `FormHelperText` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  const [hasHelpText, setHasHelpText] = React.useState(false);
  const context = {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    nativeID,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps
  };
  return context;
}

/**
 * React hook that provides the props that should be spread on to
 * input fields (`input`, `select`, `textarea`, etc.).
 *
 * It provides a convenient way to control a form fields, validation
 * and helper text.
 */
export function useFormControl(props) {
  const field = useFormControlContext();
  const describedBy = [];

  // Error message must be described first in all scenarios.
  if (field !== null && field !== void 0 && field.hasFeedbackText) describedBy.push(field === null || field === void 0 ? void 0 : field.feedbackId);
  if (field !== null && field !== void 0 && field.hasHelpText) describedBy.push(field === null || field === void 0 ? void 0 : field.helpTextId);
  const ariaDescribedBy = describedBy.join(' ');
  const {
    isInvalid,
    isDisabled,
    isReadOnly,
    isRequired,
    ...cleanProps
  } = props;
  let nativeID = props === null || props === void 0 ? void 0 : props.nativeID;
  if (!nativeID && field !== null && field !== void 0 && field.nativeID) {
    nativeID = `${field === null || field === void 0 ? void 0 : field.nativeID}-input`;
  }
  return {
    ...cleanProps,
    nativeID: nativeID,
    disabled: isDisabled || (field === null || field === void 0 ? void 0 : field.isDisabled),
    readOnly: isReadOnly || (field === null || field === void 0 ? void 0 : field.isReadOnly),
    required: isRequired || (field === null || field === void 0 ? void 0 : field.isRequired),
    accessibilityInvalid: ariaAttr(isInvalid || (field === null || field === void 0 ? void 0 : field.isInvalid)),
    accessibilityRequired: ariaAttr(isRequired || (field === null || field === void 0 ? void 0 : field.isRequired)),
    accessibilityReadOnly: ariaAttr(isReadOnly || (field === null || field === void 0 ? void 0 : field.isReadOnly)),
    accessibilityDescribedBy: ariaDescribedBy || undefined
  };
}
export const useFormControlContext = () => {
  return React.useContext(FormControlContext);
};
//# sourceMappingURL=useFormControl.js.map