/// <reference types="react" />
import * as ToastPrimitives from "@radix-ui/react-toast";
import { type VariantProps } from "class-variance-authority";
import { ToastStyle } from "./style";
declare const ToastProvider: import("react").FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: import("react").ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & import("react").RefAttributes<HTMLOListElement>, "ref"> & import("react").RefAttributes<HTMLOListElement>>;
declare const Toast: import("react").ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & import("react").RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & import("react").RefAttributes<HTMLLIElement>>;
declare const ToastAction: import("react").ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
declare const ToastClose: import("react").ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: import("react").ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare const ToastDescription: import("react").ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;
export { type ToastProps, type ToastActionElement, ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction, ToastStyle, };
//# sourceMappingURL=toast.d.ts.map