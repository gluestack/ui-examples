import { TextArea } from './TextArea';
import { TextAreaRoot } from './TextAreaRoot';
export function createTextArea(_ref) {
  let {
    Root,
    Input
  } = _ref;
  const TextAreaTemp = TextAreaRoot(Root);
  TextAreaTemp.Input = TextArea(Input);
  TextAreaTemp.displayName = 'TextArea';
  TextAreaTemp.Input.displayName = 'TextArea.Input';
  return TextAreaTemp;
}
//# sourceMappingURL=index.js.map