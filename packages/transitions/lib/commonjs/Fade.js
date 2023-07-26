"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PresenceTransition = _interopRequireDefault(require("./PresenceTransition"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// import type { IFadeProps } from './types';

const Fade = (_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    in: animationState,
    // entryDuration,
    // exitDuration,
    ...resolvedProps
  } = props;

  // if (entryDuration) {
  //   resolvedProps.animate.transition.duration = entryDuration;
  // }
  // if (exitDuration) {
  //   resolvedProps.exit.transition.duration = exitDuration;
  // }

  return /*#__PURE__*/_react.default.createElement(_PresenceTransition.default, _extends({
    visible: animationState,
    ref: ref
  }, resolvedProps), children);
};
var _default = /*#__PURE__*/_react.default.forwardRef(Fade);
exports.default = _default;
//# sourceMappingURL=Fade.js.map