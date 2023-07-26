import type { ISupportedTransitions, ITransitionConfig } from './types';
interface IStaggerConfig {
    offset: number;
    reverse?: boolean;
}
export interface IStaggerStyleProps extends ISupportedTransitions {
    transition?: ITransitionConfig & {
        stagger?: IStaggerConfig;
    };
}
interface IStaggerProps {
    children: any;
    /**
     * Initial styles before the transition starts
     */
    initial?: ISupportedTransitions;
    /**
     * The styles to which each child should animate to while entering.
     */
    animate?: IStaggerStyleProps;
    /**
     * The styles to which each child should animate to while exiting.
     */
    exit?: IStaggerStyleProps;
    /**
     * Determines whether to start the animation
     */
    visible?: boolean;
}
declare const Stagger: ({ children, ...restProps }: IStaggerProps) => any;
export default Stagger;
//# sourceMappingURL=Stagger.d.ts.map