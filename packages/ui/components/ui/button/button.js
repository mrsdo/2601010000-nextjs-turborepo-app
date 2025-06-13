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
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { ButtonStyle } from "./style";
const buttonVariants = cva(ButtonStyle.base, {
    variants: {
        variant: ButtonStyle.variants,
        size: ButtonStyle.sizes,
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});
const Button = forwardRef((_a, ref) => {
    var { className, variant, size, asChild = false } = _a, props = __rest(_a, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? Slot : "button";
    return (_jsx(Comp, Object.assign({ className: cn(buttonVariants({ variant, size, className })), ref: ref }, props)));
});
Button.displayName = "Button";
export { Button, ButtonStyle, buttonVariants };
