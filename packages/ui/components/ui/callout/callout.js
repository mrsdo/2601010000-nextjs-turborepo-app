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
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { CalloutStyle } from "./style";
const calloutVariants = cva(CalloutStyle.base, {
    variants: {
        variant: CalloutStyle.variants,
    },
    defaultVariants: {
        variant: "default",
    },
});
const Callout = (_a) => {
    var { className, variant } = _a, props = __rest(_a, ["className", "variant"]);
    return (_jsx("div", Object.assign({ className: cn(calloutVariants({ variant, className })) }, props)));
};
Callout.displayName = "Callout";
export { Callout, CalloutStyle, calloutVariants };
