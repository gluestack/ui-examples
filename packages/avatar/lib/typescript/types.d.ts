/// <reference types="react" />
export interface InterfaceAvatarProps {
}
export interface IAvatarBadgeProps {
}
export interface IAvatarGroupProps extends IAvatarProps {
    /**
     * Avatar children
     */
    children?: JSX.Element[] | JSX.Element;
    /**
     * The distance each avatar.
     */
    space?: number;
    /**
     * The max number of avatar.
     * @default -4
     */
    max?: number;
    /**
     * Make Avatar.Group render in vertical direction.
     * @default false
     */
    isVertical?: Boolean;
}
export type IAvatarComponentType<AvatarProps, BadgeProps, GroupProps, ImageProps, FallbackTextProps> = ((props: IAvatarProps & AvatarProps) => JSX.Element) & {
    Badge: (props: BadgeProps) => JSX.Element;
    Group: (props: GroupProps) => JSX.Element;
    Image: (props: ImageProps) => JSX.Element;
    FallbackText: (props: FallbackTextProps) => JSX.Element;
};
export type IAvatarProps = InterfaceAvatarProps;
//# sourceMappingURL=types.d.ts.map