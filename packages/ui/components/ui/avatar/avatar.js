"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { AvatarStyle } from "./style";
const avatarVariants = cva(AvatarStyle.base, {
    variants: {
        size: AvatarStyle.sizes,
    },
    defaultVariants: {
        size: "md",
    },
});
const Avatar = forwardRef((_a, ref) => {
    var { size, className } = _a, props = __rest(_a, ["size", "className"]);
    return (_jsx(AvatarPrimitive.Root, Object.assign({ ref: ref, className: cn(avatarVariants({ size, className })) }, props)));
});
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(AvatarPrimitive.Image, Object.assign({ ref: ref, className: cn("aspect-square size-full", className) }, props)));
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(AvatarPrimitive.Fallback, Object.assign({ ref: ref, className: cn("flex size-full items-center justify-center rounded-full bg-muted", className) }, props)));
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
export { Avatar, AvatarImage, AvatarFallback, avatarVariants, AvatarStyle, };
