function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { combineContextAndProps } from '@gluestack-ui/utils';
import { useFormControlContext } from './useFormControl';
import { mergeRefs } from '@gluestack-ui/utils';
const FormControlLabel = _ref2 => {
  let {
    Label: StyledFormControlLabel,
    LabelAstrick: StyledFormControlLabelAstrick
  } = _ref2;
  return /*#__PURE__*/forwardRef((_ref3, ref) => {
    let {
      children,
      ...props
    } = _ref3;
    const formControlContext = useFormControlContext();
    const {
      isRequired,
      ...combinedProps
    } = combineContextAndProps(formControlContext, props);
    const _ref = React.useRef(null);
    const mergedRef = mergeRefs([_ref, ref]);
    React.useEffect(() => {
      if (_ref.current) {
        // RN web doesn't support htmlFor for Label element yet
        if (props.htmlFor) {
          _ref.current.htmlFor = props.htmlFor;
        } else if (combinedProps !== null && combinedProps !== void 0 && combinedProps.nativeID) {
          _ref.current.htmlFor = combinedProps.nativeID;
        }
      }
    }, [combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.nativeID, props.htmlFor]);
    return /*#__PURE__*/React.createElement(StyledFormControlLabel, _extends({
      ref: mergedRef
    }, combinedProps, {
      nativeID: combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.labelId
    }), children, isRequired && /*#__PURE__*/React.createElement(StyledFormControlLabelAstrick, null, "*"));
  });
};
export default FormControlLabel;
//# sourceMappingURL=FormControlLabel.js.map