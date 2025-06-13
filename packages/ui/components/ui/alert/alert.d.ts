/// <reference types="react" />
import { type VariantProps } from "class-variance-authority";
import { AlertStyle } from "./style";
declare const Alert: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & import("react").RefAttributes<HTMLDivElement>>;
declare const AlertTitle: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLHeadingElement> & import("react").RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLParagraphElement>>;
export { Alert, AlertTitle, AlertDescription, AlertStyle };
//# sourceMappingURL=alert.d.ts.map