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
import { Cross2Icon } from "@radix-ui/react-icons";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { ToastStyle } from "./style";
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(ToastPrimitives.Viewport, Object.assign({ ref: ref, className: cn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className) }, props)));
});
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(ToastStyle.base, {
    variants: {
        variant: ToastStyle.variants,
    },
    defaultVariants: {
        variant: "default",
    },
});
const Toast = forwardRef((_a, ref) => {
    var { className, variant } = _a, props = __rest(_a, ["className", "variant"]);
    return (_jsx(ToastPrimitives.Root, Object.assign({ ref: ref, className: cn(toastVariants({ variant }), className) }, props)));
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(ToastPrimitives.Action, Object.assign({ ref: ref, className: cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className) }, props)));
});
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(ToastPrimitives.Close, Object.assign({ ref: ref, className: cn("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className), "toast-close": "" }, props, { children: _jsx(Cross2Icon, { className: "size-4" }) })));
});
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(ToastPrimitives.Title, Object.assign({ ref: ref, className: cn("text-sm font-semibold [&+div]:text-xs", className) }, props)));
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(ToastPrimitives.Description, Object.assign({ ref: ref, className: cn("text-sm opacity-90", className) }, props)));
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;
export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction, ToastStyle, };
