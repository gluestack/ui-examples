"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineContextAndProps = void 0;
const combineContextAndProps = (context, props) => {
  return {
    ...context,
    ...props
  };
};
exports.combineContextAndProps = combineContextAndProps;
//# sourceMappingURL=combineContextAndProps.js.map