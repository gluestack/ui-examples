/// <reference types="react" />
import { useLink } from './useLink';
import type { InterfaceLinkProps, IUseLinkProp } from './types';
declare const createLink: <Root>({ Root }: {
    Root: import("react").ComponentType<Root>;
}) => import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<Root & InterfaceLinkProps> & import("react").RefAttributes<unknown>>;
export type { InterfaceLinkProps, IUseLinkProp };
export { createLink, useLink };
//# sourceMappingURL=index.d.ts.map