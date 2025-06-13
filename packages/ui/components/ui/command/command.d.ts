/// <reference types="react" />
import { type DialogProps } from "@radix-ui/react-dialog";
declare const Command: import("react").ForwardRefExoticComponent<Omit<{
    children?: import("react").ReactNode;
} & Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "key" | "asChild" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    label?: string | undefined;
    shouldFilter?: boolean | undefined;
    filter?: ((value: string, search: string, keywords?: string[] | undefined) => number) | undefined;
    defaultValue?: string | undefined;
    value?: string | undefined;
    onValueChange?: ((value: string) => void) | undefined;
    loop?: boolean | undefined;
    disablePointerSelection?: boolean | undefined;
    vimBindings?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
interface CommandDialogProps extends DialogProps {
}
declare const CommandDialog: ({ children, ...props }: CommandDialogProps) => import("react/jsx-runtime").JSX.Element;
declare const CommandInput: import("react").ForwardRefExoticComponent<Omit<Omit<Pick<Pick<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof import("react").InputHTMLAttributes<HTMLInputElement>> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "key" | "asChild" | keyof import("react").InputHTMLAttributes<HTMLInputElement>>, "value" | "onChange" | "type"> & {
    value?: string | undefined;
    onValueChange?: ((search: string) => void) | undefined;
} & import("react").RefAttributes<HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
declare const CommandList: import("react").ForwardRefExoticComponent<Omit<{
    children?: import("react").ReactNode;
} & Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "key" | "asChild" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    label?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare const CommandEmpty: import("react").ForwardRefExoticComponent<Omit<{
    children?: import("react").ReactNode;
} & Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "key" | "asChild" | keyof import("react").HTMLAttributes<HTMLDivElement>> & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare const CommandGroup: import("react").ForwardRefExoticComponent<Omit<{
    children?: import("react").ReactNode;
} & Omit<Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "key" | "asChild" | keyof import("react").HTMLAttributes<HTMLDivElement>>, "value" | "heading"> & {
    heading?: import("react").ReactNode;
    value?: string | undefined;
    forceMount?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare const CommandSeparator: import("react").ForwardRefExoticComponent<Omit<Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "key" | "asChild" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    alwaysRender?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare const CommandItem: import("react").ForwardRefExoticComponent<Omit<{
    children?: import("react").ReactNode;
} & Omit<Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "key" | "asChild" | keyof import("react").HTMLAttributes<HTMLDivElement>>, "value" | "onSelect" | "disabled"> & {
    disabled?: boolean | undefined;
    onSelect?: ((value: string) => void) | undefined;
    value?: string | undefined;
    keywords?: string[] | undefined;
    forceMount?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare const CommandShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator, };
//# sourceMappingURL=command.d.ts.map