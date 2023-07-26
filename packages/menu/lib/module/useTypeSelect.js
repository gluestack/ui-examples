import { Platform } from 'react-native';
const ITEM_ATTR = 'data-key';
const getValue = element => element.getAttribute(ITEM_ATTR) ?? '';
export const useTypeSelect = state => {
  if (Platform.OS !== 'web') return;
  return {
    onKeyDownCapture(event) {
      if (event.key.length === 1 && !(event.ctrlKey || event.altKey || event.metaKey)) {
        const container = event.currentTarget;

        // Get all the items key in the menu
        const values = Array.from(container.querySelectorAll(`[${ITEM_ATTR}]`)).map(getValue);

        // Get the search key
        const searchKey = event.key;

        // find the first item that starts with the search key
        const foundValue = values.find(value => value.toLowerCase().startsWith(searchKey));
        // set the focus to the found item
        if (!state.disabledKeys.has(foundValue)) {
          foundValue && state.selectionManager.setFocusedKey(foundValue);
        }
      }
    }
  };
};
//# sourceMappingURL=useTypeSelect.js.map