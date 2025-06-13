/// <reference types="react" />
import type * as LabelPrimitive from "@radix-ui/react-label";
import { type ControllerProps, type FieldPath, type FieldValues } from "react-hook-form";
declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: import("react-hook-form").FormProviderProps<TFieldValues, TContext, TTransformedValues>) => import("react").JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => import("react/jsx-runtime").JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: import("react-hook-form").FieldError | undefined;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
declare const FormLabel: import("react").ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & import("react").RefAttributes<HTMLLabelElement>, "ref"> & import("react").RefAttributes<HTMLLabelElement>>;
declare const FormControl: import("react").ForwardRefExoticComponent<Omit<import("@radix-ui/react-slot").SlotProps & import("react").RefAttributes<HTMLElement>, "ref"> & import("react").RefAttributes<HTMLElement>>;
declare const FormDescription: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLParagraphElement> & import("react").RefAttributes<HTMLParagraphElement>>;
declare const FormMessage: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLParagraphElement> & import("react").RefAttributes<HTMLParagraphElement>>;
type FormFooterProps = React.HTMLAttributes<HTMLDivElement> & {
    side?: "left" | "right";
};
declare const FormFooter: {
    ({ className, side, ...props }: FormFooterProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField, FormFooter, };
//# sourceMappingURL=form.d.ts.map