import React from "react";

export interface SharedModalProps {
    isOpened: boolean;
    onClose: () => void;
    onSubmit: () => void;
    children: React.ReactNode;
}

export interface SharedModalChildrenProps {
    closeHandler: () => void;
    submitHandler: () => void;
}