/// <reference types="react" />
import { type VariantProps } from "class-variance-authority";
import { CalloutStyle } from "./style";
declare const calloutVariants: (props?: ({
    variant?: "default" | "destructive" | "success" | "warning" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type CallooutProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof calloutVariants> & {
    children?: React.ReactNode;
};
declare const Callout: {
    ({ className, variant, ...props }: CallooutProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { Callout, CalloutStyle, calloutVariants };
//# sourceMappingURL=callout.d.ts.map