import { Linking, Platform } from 'react-native';
const linkToHREF = URL => {
  Linking.openURL(URL).catch(err => console.error('An error occurred', err));
};
const addOnPressFunctionality = (href, callback) => {
  href ? linkToHREF(href) : '';
  callback ? callback() : () => {};
};
export function useLink(props) {
  const {
    href,
    isExternal,
    onPress,
    _ref
  } = props;
  let platformLinkProps = {};
  if (Platform.OS === 'web') {
    platformLinkProps = {
      href,
      onClick: onPress
    };
    // Adding target to a tag created by RN-Web
    if (isExternal && _ref.current) {
      _ref.current.target = '_blank';
      _ref.current.rel = 'noopener';
    }
  } else {
    platformLinkProps = {
      onPress: () => {
        addOnPressFunctionality(href, onPress);
      }
    };
  }
  return {
    linkProps: {
      ...platformLinkProps,
      accessibilityRole: 'link',
      accessible: true
    }
  };
}
//# sourceMappingURL=useLink.js.map