/// <reference types="react" />
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { type AvatarProps } from "@radix-ui/react-avatar";
import { type VariantProps } from "class-variance-authority";
import { AvatarStyle } from "./style";
declare const avatarVariants: (props?: ({
    size?: "md" | "lg" | "sm" | "xs" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const Avatar: import("react").ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & import("react").RefAttributes<HTMLSpanElement>, "ref"> & VariantProps<(props?: ({
    size?: "md" | "lg" | "sm" | "xs" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & import("react").RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: import("react").ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & import("react").RefAttributes<HTMLImageElement>, "ref"> & import("react").RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: import("react").ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & import("react").RefAttributes<HTMLSpanElement>, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
export { Avatar, AvatarImage, AvatarFallback, AvatarProps, avatarVariants, AvatarStyle, };
//# sourceMappingURL=avatar.d.ts.map