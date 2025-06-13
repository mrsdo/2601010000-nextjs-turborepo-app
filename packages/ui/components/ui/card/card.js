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
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { CardStyle } from "./style";
const cardVariants = cva(CardStyle.base, {
    variants: {
        variant: CardStyle.variants,
    },
    defaultVariants: {
        variant: "default",
    },
});
const Card = forwardRef((_a, ref) => {
    var { className, variant } = _a, props = __rest(_a, ["className", "variant"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn(cardVariants({ variant, className })) }, props)));
});
Card.displayName = "Card";
const CardHeader = forwardRef((_a, ref) => {
    var { className, isAbsolute = false } = _a, props = __rest(_a, ["className", "isAbsolute"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("flex flex-col space-y-1.5", {
            "absolute left-0 top-0 z-[1] p-3": isAbsolute,
        }, className) }, props)));
});
CardHeader.displayName = "CardHeader";
const CardTitle = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("h3", Object.assign({ ref: ref, className: cn("font-semibold leading-none tracking-tight", className) }, props)));
});
CardTitle.displayName = "CardTitle";
const CardDescription = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("p", Object.assign({ ref: ref, className: cn("text-sm text-muted-foreground", className) }, props)));
});
CardDescription.displayName = "CardDescription";
const CardContent = forwardRef((_a, ref) => {
    var { className, isPoster = false } = _a, props = __rest(_a, ["className", "isPoster"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("relative", {
            "aspect-poster": isPoster,
        }, className) }, props)));
});
CardContent.displayName = "CardContent";
const CardFooter = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("flex items-center text-sm", className) }, props)));
});
CardFooter.displayName = "CardFooter";
const CardBackground = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("absolute inset-0 bg-gradient-to-t from-slate-900", className) }, props)));
});
CardBackground.displayName = "CardBackground";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardBackground, CardStyle, };
