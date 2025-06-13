"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable, } from "@tanstack/react-table";
import { Button } from "../button";
import { Input } from "../input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "../table";
export function DataTable({ columns, data, searchKey, }) {
    var _a, _b, _c;
    const [columnFilters, setColumnFilters] = useState([]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        },
    });
    return (_jsxs("div", { children: [_jsx("div", { className: "flex items-center py-4", children: _jsx(Input, { placeholder: "Search", value: (_b = (_a = table.getColumn(searchKey)) === null || _a === void 0 ? void 0 : _a.getFilterValue()) !== null && _b !== void 0 ? _b : "", onChange: (event) => { var _a; return (_a = table.getColumn(searchKey)) === null || _a === void 0 ? void 0 : _a.setFilterValue(event.target.value); }, className: "max-w-sm" }) }), _jsx("div", { className: "rounded-md border", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => (_jsx(TableRow, { children: headerGroup.headers.map((header) => {
                                    return (_jsx(TableHead, { children: header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext()) }, header.id));
                                }) }, headerGroup.id))) }), _jsx(TableBody, { children: ((_c = table.getRowModel().rows) === null || _c === void 0 ? void 0 : _c.length) ? (table.getRowModel().rows.map((row) => (_jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => (_jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id)))) : (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No results." }) })) })] }) }), _jsxs("div", { className: "flex items-center justify-end space-x-2 py-4", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: "Previous" }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: "Next" })] })] }));
}
