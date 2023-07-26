import React from 'react';
import type { IToastContext } from './types';
export declare const ToastContext: React.Context<IToastContext>;
export declare const ToastProvider: ({ children }: {
    children: any;
}) => React.JSX.Element;
export declare const useToast: () => {
    show: (props: import("./types").InterfaceToastProps) => any;
    close: (id: any) => void;
    closeAll: () => void;
    isActive: (id: any) => boolean;
};
//# sourceMappingURL=Toast.d.ts.map