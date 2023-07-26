"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAvatar = createAvatar;
var _Avatar = require("./Avatar");
var _AvatarBadge = _interopRequireDefault(require("./AvatarBadge"));
var _AvatarGroup = _interopRequireDefault(require("./AvatarGroup"));
var _AvatarImage = _interopRequireDefault(require("./AvatarImage"));
var _AvatarFallbackText = require("./AvatarFallbackText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createAvatar(_ref) {
  let {
    Root,
    Badge,
    Group,
    Image,
    FallbackText
  } = _ref;
  const Avatar = (0, _Avatar.Avatar)(Root);
  Avatar.Badge = (0, _AvatarBadge.default)(Badge);
  Avatar.Group = (0, _AvatarGroup.default)(Group);
  Avatar.Image = (0, _AvatarImage.default)(Image);
  Avatar.FallbackText = (0, _AvatarFallbackText.AvatarFallbackText)(FallbackText);
  Avatar.displayName = 'Avatar';
  Avatar.Badge.displayName = 'Avatar.Badge';
  Avatar.Group.displayName = 'Avatar.Group';
  Avatar.Image.displayName = 'Avatar.Image';
  Avatar.FallbackText.displayName = 'Avatar.FallbackText';
  return Avatar;
}
//# sourceMappingURL=index.js.map