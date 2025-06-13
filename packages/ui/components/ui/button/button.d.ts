/// <reference types="react" />
import { type VariantProps } from "class-variance-authority";
import { ButtonStyle } from "./style";
declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "secondary" | "outline" | "brand" | "ghost" | null | undefined;
    size?: "md" | "lg" | "sm" | "xs" | "icon" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
};
declare const Button: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: ({
    variant?: "link" | "default" | "destructive" | "secondary" | "outline" | "brand" | "ghost" | null | undefined;
    size?: "md" | "lg" | "sm" | "xs" | "icon" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & {
    asChild?: boolean | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
export { Button, ButtonStyle, buttonVariants };
//# sourceMappingURL=button.d.ts.map