/// <reference types="react" />
import { type VariantProps } from "class-variance-authority";
import { BadgeStyle } from "./style";
declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "secondary" | "outline" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>;
declare const Badge: ({ className, variant, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants, BadgeStyle };
//# sourceMappingURL=badge.d.ts.map