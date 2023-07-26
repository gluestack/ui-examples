/// <reference types="react" />
import type { IToolTipComponentType } from './types';
export declare function createTooltip<TooltipProps, TooltipContentProps, TooltipAnimatePresenceProps>({ Root, Content, AnimatePresence, }: {
    Root: React.ComponentType<TooltipProps>;
    Content: React.ComponentType<TooltipContentProps>;
    AnimatePresence?: React.ComponentType<TooltipAnimatePresenceProps>;
}): IToolTipComponentType<TooltipProps, TooltipContentProps>;
//# sourceMappingURL=index.d.ts.map