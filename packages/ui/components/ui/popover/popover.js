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
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { PopoverStyle } from "./style";
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const popoverVariants = cva(PopoverStyle.base);
const PopoverContent = forwardRef((_a, ref) => {
    var { className, align = "center", sideOffset = 4 } = _a, props = __rest(_a, ["className", "align", "sideOffset"]);
    return (_jsx(PopoverPrimitive.Portal, { children: _jsx(PopoverPrimitive.Content, Object.assign({ ref: ref, align: align, sideOffset: sideOffset, className: cn(popoverVariants(), className) }, props)) }));
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
export { Popover, PopoverTrigger, PopoverContent };
