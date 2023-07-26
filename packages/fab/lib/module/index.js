import FabMain from './Fab';
import FabLabel from './FabLabel';
export function createFab(_ref) {
  let {
    Root,
    Label
  } = _ref;
  const Fab = FabMain(Root);
  Fab.Label = FabLabel(Label);
  Fab.displayName = 'Fab';
  return Fab;
}
//# sourceMappingURL=index.js.map