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
import { cn } from "../../../lib/utils";
const Table = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", { className: "relative w-full overflow-auto", children: _jsx("table", Object.assign({ ref: ref, className: cn("w-full caption-bottom text-sm", className) }, props)) }));
});
Table.displayName = "Table";
const TableHeader = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("thead", Object.assign({ ref: ref, className: cn("[&_tr]:border-b", className) }, props)));
});
TableHeader.displayName = "TableHeader";
const TableBody = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("tbody", Object.assign({ ref: ref, className: cn("[&_tr:last-child]:border-0", className) }, props)));
});
TableBody.displayName = "TableBody";
const TableFooter = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("tfoot", Object.assign({ ref: ref, className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className) }, props)));
});
TableFooter.displayName = "TableFooter";
const TableRow = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("tr", Object.assign({ ref: ref, className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className) }, props)));
});
TableRow.displayName = "TableRow";
const TableHead = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("th", Object.assign({ ref: ref, className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className) }, props)));
});
TableHead.displayName = "TableHead";
const TableCell = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("td", Object.assign({ ref: ref, className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className) }, props)));
});
TableCell.displayName = "TableCell";
const TableCaption = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("caption", Object.assign({ ref: ref, className: cn("mt-4 text-sm text-muted-foreground", className) }, props)));
});
TableCaption.displayName = "TableCaption";
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, };
