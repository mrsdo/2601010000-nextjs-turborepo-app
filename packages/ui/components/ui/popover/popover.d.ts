/// <reference types="react" />
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { type VariantProps } from "class-variance-authority";
declare const Popover: import("react").FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: import("react").ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: import("react").ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string> & import("react").RefAttributes<HTMLDivElement>>;
export { Popover, PopoverTrigger, PopoverContent };
//# sourceMappingURL=popover.d.ts.map