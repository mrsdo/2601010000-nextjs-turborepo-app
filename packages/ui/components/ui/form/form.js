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
import { createContext, forwardRef, useContext, useId } from "react";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext, } from "react-hook-form";
import { cn } from "../../../lib/utils";
import { Label } from "../label";
const Form = FormProvider;
const FormFieldContext = createContext({});
const FormField = (_a) => {
    var props = __rest(_a, []);
    return (_jsx(FormFieldContext.Provider, { value: { name: props.name }, children: _jsx(Controller, Object.assign({}, props)) }));
};
const useFormField = () => {
    const fieldContext = useContext(FormFieldContext);
    const itemContext = useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return Object.assign({ id, name: fieldContext.name, formItemId: `${id}-form-item`, formDescriptionId: `${id}-form-item-description`, formMessageId: `${id}-form-item-message` }, fieldState);
};
const FormItemContext = createContext({});
const FormItem = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    const id = useId();
    return (_jsx(FormItemContext.Provider, { value: { id }, children: _jsx("div", Object.assign({ ref: ref, className: cn("space-y-2", className) }, props)) }));
});
FormItem.displayName = "FormItem";
const FormLabel = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    const { error, formItemId } = useFormField();
    return (_jsx(Label, Object.assign({ ref: ref, className: cn(error && "text-destructive", className), htmlFor: formItemId }, props)));
});
FormLabel.displayName = "FormLabel";
const FormControl = forwardRef((_a, ref) => {
    var props = __rest(_a, []);
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return (_jsx(Slot, Object.assign({ ref: ref, id: formItemId, "aria-describedby": !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`, "aria-invalid": !!error }, props)));
});
FormControl.displayName = "FormControl";
const FormDescription = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    const { formDescriptionId } = useFormField();
    return (_jsx("p", Object.assign({ ref: ref, id: formDescriptionId, className: cn("text-[0.8rem] text-muted-foreground", className) }, props)));
});
FormDescription.displayName = "FormDescription";
const FormMessage = forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    const { error, formMessageId } = useFormField();
    const body = error ? String(error === null || error === void 0 ? void 0 : error.message) : children;
    if (!body) {
        return null;
    }
    return (_jsx("p", Object.assign({ ref: ref, id: formMessageId, className: cn("text-[0.8rem] font-medium text-destructive", className) }, props, { children: body })));
});
FormMessage.displayName = "FormMessage";
const FormFooter = (_a) => {
    var { className, side = "left" } = _a, props = __rest(_a, ["className", "side"]);
    return (_jsx("div", Object.assign({ className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", {
            "sm:justify-end": side === "right",
            "sm:justify-start": side === "left",
        }, className) }, props)));
};
FormFooter.displayName = "FormFooter";
export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField, FormFooter, };
