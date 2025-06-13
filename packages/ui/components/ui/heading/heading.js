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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../../lib/utils";
import { Separator } from "../separator";
const Heading = forwardRef((_a, ref) => {
    var { title, suffixTitle, description, className, children } = _a, props = __rest(_a, ["title", "suffixTitle", "description", "className", "children"]);
    return (_jsxs("div", Object.assign({ className: cn("relative space-y-4", className), ref: ref }, props, { children: [_jsxs("h1", Object.assign({ className: "flex items-center gap-2 font-heading text-4xl lg:text-5xl", ref: ref }, props, { children: [title, suffixTitle && (_jsx("span", { className: "mt-1 text-3xl text-muted-foreground", children: suffixTitle }))] })), description && (_jsx("p", { className: "text-xl text-muted-foreground", children: description })), children, _jsx(Separator, {})] })));
});
Heading.displayName = "Heading";
const HeadingAction = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: cn("absolute right-0 top-0", className), ref: ref }, props)));
});
HeadingAction.displayName = "HeadingAction";
export { Heading, HeadingAction };
