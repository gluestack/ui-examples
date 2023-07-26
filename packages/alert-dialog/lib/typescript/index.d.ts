/// <reference types="react" />
import type { IAlertDialogComponentType } from './types';
export declare function createAlertDialog<AlertDialog, AlertDialogContent, AlertDialogCloseButton, AlertDialogHeader, AlertDialogFooter, AlertDialogBody, AlertDialogBackdrop, AlertDialogAnimatePresence>({ Root, Content, CloseButton, Header, Footer, Body, Backdrop, AnimatePresence, }: {
    Root: React.ComponentType<AlertDialog>;
    Content: React.ComponentType<AlertDialogContent>;
    CloseButton: React.ComponentType<AlertDialogCloseButton>;
    Header: React.ComponentType<AlertDialogHeader>;
    Footer: React.ComponentType<AlertDialogFooter>;
    Body: React.ComponentType<AlertDialogBody>;
    Backdrop: React.ComponentType<AlertDialogBackdrop>;
    AnimatePresence?: React.ComponentType<AlertDialogAnimatePresence>;
}): IAlertDialogComponentType<AlertDialog, AlertDialogContent, AlertDialogCloseButton, AlertDialogHeader, AlertDialogFooter, AlertDialogBody, AlertDialogBackdrop>;
//# sourceMappingURL=index.d.ts.map