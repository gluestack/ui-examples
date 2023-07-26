"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectPortal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SelectContext = require("./SelectContext");
var _reactNative = require("react-native");
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SelectPortal = StyledSelectPortal => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    isOpen,
    handleClose,
    closeOnOverlayClick,
    isDisabled,
    hoverRef,
    hoverProps,
    focusProps,
    onValueChange,
    value,
    setFocused,
    setValue,
    onOpen,
    isReadOnly,
    ...portalProps
  } = _react.default.useContext(_SelectContext.SelectContext);
  if (_reactNative.Platform.OS !== 'web') {
    return /*#__PURE__*/_react.default.createElement(StyledSelectPortal, _extends({
      isOpen: isOpen,
      onClose: handleClose,
      closeOnOverlayClick: closeOnOverlayClick
    }, props, {
      ref: ref
    }), /*#__PURE__*/_react.default.createElement(_SelectContext.SelectPortalContext.Provider, {
      value: {
        isOpen,
        handleClose,
        closeOnOverlayClick,
        isDisabled,
        hoverRef,
        hoverProps,
        focusProps,
        setValue,
        value,
        isReadOnly,
        setFocused,
        onValueChange,
        ...portalProps
      }
    }, children));
  }
  const tempFix = '__GluestackPlaceholder__';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("select", _extends({
    disabled: isDisabled || isReadOnly
  }, focusProps, hoverProps, {
    onChange: e => {
      onValueChange(e.target.value);
      handleClose();
    },
    onKeyDown: e => {
      if (e.code === 'Space') {
        onOpen && onOpen();
      }
    },
    ref: (0, _utils.mergeRefs)([ref, hoverRef]),
    value: value === null ? tempFix : value,
    "aria-label": "placeholder",
    "aria-readonly": isReadOnly,
    style: _reactNative.StyleSheet.flatten([{
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0,
      zIndex: 1,
      cursor: isDisabled ? 'not-allowed' : 'pointer'
    }]),
    onClick: onOpen,
    onFocus: () => {
      setFocused(true);
    },
    onBlur: () => {
      setFocused(false);
    }
  }), children));
});
exports.SelectPortal = SelectPortal;
//# sourceMappingURL=SelectPortal.js.map