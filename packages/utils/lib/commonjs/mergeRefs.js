"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeRefs = mergeRefs;
function mergeRefs(refs) {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
//# sourceMappingURL=mergeRefs.js.map