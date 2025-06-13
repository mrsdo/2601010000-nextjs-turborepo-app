"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, } from "../dialog";
export const Modal = ({ title, description, isOpen, onClose, children, }) => {
    const onChange = (open) => {
        if (!open) {
            onClose();
        }
    };
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onChange, children: _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: title }), _jsx(DialogDescription, { children: description })] }), _jsx("div", { children: children })] }) }));
};
