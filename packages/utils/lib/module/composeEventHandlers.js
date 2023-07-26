export function composeEventHandlers(originalEventHandler, ourEventHandler) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 ? void 0 : originalEventHandler(event);
    ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}
//# sourceMappingURL=composeEventHandlers.js.map