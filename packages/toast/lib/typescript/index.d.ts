/// <reference types="react" />
import type { IToastComponentType } from './types';
export declare const createToastHook: () => () => {
    show: (props: import("./types").InterfaceToastProps) => any;
    close: (id: any) => void;
    closeAll: () => void;
    isActive: (id: any) => boolean;
};
export declare function createToast<Root, Title, Description>({ Root, Title, Description, }: {
    Root: React.ComponentType<Root>;
    Title: React.ComponentType<Title>;
    Description: React.ComponentType<Description>;
}): IToastComponentType<Root, Title, Description>;
export { ToastProvider } from './Toast';
//# sourceMappingURL=index.d.ts.map