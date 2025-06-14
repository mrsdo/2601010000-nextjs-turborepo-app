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
import { InputStyle } from "./style";
const inputVariants = cva(InputStyle.base);
const Input = forwardRef((_a, ref) => {
    var { className, type } = _a, props = __rest(_a, ["className", "type"]);
    return (_jsx("input", Object.assign({ type: type, className: cn(inputVariants(), className), ref: ref }, props)));
});
Input.displayName = "Input";
export { Input };
