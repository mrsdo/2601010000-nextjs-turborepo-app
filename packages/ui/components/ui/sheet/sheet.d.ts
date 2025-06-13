/// <reference types="react" />
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { type VariantProps } from "class-variance-authority";
import { SheetStyle } from "./style";
declare const Sheet: import("react").FC<SheetPrimitive.DialogProps>;
declare const SheetTrigger: import("react").ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const SheetClose: import("react").ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: import("react").FC<SheetPrimitive.DialogPortalProps>;
declare const sheetVariants: (props?: ({
    side?: "left" | "right" | "top" | "bottom" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type SheetContentProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & VariantProps<typeof sheetVariants>;
declare const SheetOverlay: import("react").ForwardRefExoticComponent<Omit<SheetPrimitive.DialogOverlayProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare const SheetContent: import("react").ForwardRefExoticComponent<Omit<SheetPrimitive.DialogContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: ({
    side?: "left" | "right" | "top" | "bottom" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & import("react").RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SheetTitle: import("react").ForwardRefExoticComponent<Omit<SheetPrimitive.DialogTitleProps & import("react").RefAttributes<HTMLHeadingElement>, "ref"> & import("react").RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: import("react").ForwardRefExoticComponent<Omit<SheetPrimitive.DialogDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>, "ref"> & import("react").RefAttributes<HTMLParagraphElement>>;
export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, SheetStyle, };
//# sourceMappingURL=sheet.d.ts.map