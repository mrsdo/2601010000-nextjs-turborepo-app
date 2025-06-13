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
import { BadgeStyle } from "./style";
const badgeVariants = cva(BadgeStyle.base, {
    variants: {
        variant: BadgeStyle.variants,
    },
    defaultVariants: {
        variant: "default",
    },
});
const Badge = (_a) => {
    var { className, variant } = _a, props = __rest(_a, ["className", "variant"]);
    return (_jsx("div", Object.assign({ className: cn(badgeVariants({ variant }), className) }, props)));
};
export { Badge, badgeVariants, BadgeStyle };
