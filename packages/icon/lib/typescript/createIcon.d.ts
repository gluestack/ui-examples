import React from 'react';
interface CreateIconOptions {
    Root?: any;
    /**
     * The icon `svg` viewBox
     * @default "0 0 24 24"
     */
    viewBox?: string;
    /**
     * The `svg` path or group element
     * @type React.ReactElement | React.ReactElement[]
     */
    path?: React.ReactElement | React.ReactElement[];
    /**
     * If the `svg` has a single path, simply copy the path's `d` attribute
     */
    d?: string;
    /**
     * The display name useful in the dev tools
     */
    displayName?: string;
    /**
     * Default props automatically passed to the component; overwritable
     */
    defaultProps?: any;
    type?: any;
}
export declare const createIcon: ({ Root, path, d, ...initialProps }: CreateIconOptions) => React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
export {};
//# sourceMappingURL=createIcon.d.ts.map