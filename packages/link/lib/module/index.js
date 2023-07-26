import { Link as LinkMain } from './Link';
import { useLink } from './useLink';
const createLink = _ref => {
  let {
    Root
  } = _ref;
  const Link = LinkMain(Root);
  Link.displayName = 'Link';
  return Link;
};
export { createLink, useLink };
//# sourceMappingURL=index.js.map