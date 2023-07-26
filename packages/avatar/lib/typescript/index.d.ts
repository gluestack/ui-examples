import type React from 'react';
import type { IAvatarComponentType } from './types';
export declare function createAvatar<AvatarProps, BadgeProps, GroupProps, ImageProps, FallbackTextProps>({ Root, Badge, Group, Image, FallbackText, }: {
    Root: React.ComponentType<AvatarProps>;
    Badge: React.ComponentType<BadgeProps>;
    Group: React.ComponentType<GroupProps>;
    Image: React.ComponentType<ImageProps>;
    FallbackText: React.ComponentType<FallbackTextProps>;
}): IAvatarComponentType<AvatarProps, BadgeProps, GroupProps, ImageProps, FallbackTextProps>;
//# sourceMappingURL=index.d.ts.map