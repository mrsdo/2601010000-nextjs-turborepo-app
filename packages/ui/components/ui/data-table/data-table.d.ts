import { type ColumnDef } from "@tanstack/react-table";
type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    searchKey: string;
};
export declare function DataTable<TData, TValue>({ columns, data, searchKey, }: DataTableProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=data-table.d.ts.map