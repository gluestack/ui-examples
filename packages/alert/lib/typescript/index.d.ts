/// <reference types="react" />
import type { IAlertComponentType } from './types';
export declare function createAlert<Alert, AlertText, AlertIcon>({ Root, Text, Icon, }: {
    Root: React.ComponentType<Alert>;
    Text: React.ComponentType<AlertText>;
    Icon: React.ComponentType<AlertIcon>;
    AnimatePresence?: React.ComponentType<any>;
}): IAlertComponentType<Alert, AlertText, AlertIcon>;
//# sourceMappingURL=index.d.ts.map