/// <reference types="react" />
import { type VariantProps } from "class-variance-authority";
import { CardStyle } from "./style";
declare const cardVariants: (props?: ({
    variant?: "default" | "poster" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type CardProps = React.ButtonHTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants> & {
    asChild?: boolean;
};
declare const Card: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "poster" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & {
    asChild?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export type CardHeaderProps = React.ButtonHTMLAttributes<HTMLDivElement> & {
    isAbsolute?: boolean;
};
declare const CardHeader: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLDivElement> & {
    isAbsolute?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
declare const CardTitle: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLHeadingElement> & import("react").RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLParagraphElement> & import("react").RefAttributes<HTMLParagraphElement>>;
export type CardContentProps = React.ButtonHTMLAttributes<HTMLDivElement> & {
    isPoster?: boolean;
};
declare const CardContent: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLDivElement> & {
    isPoster?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
declare const CardFooter: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
declare const CardBackground: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardBackground, CardStyle, };
//# sourceMappingURL=card.d.ts.map