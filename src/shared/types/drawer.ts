import React from "react";

export interface SharedDrawerProps {
    isOpened: boolean;
    title?: string;
    onClose: () => void;
    onSubmit: () => void;
    children: (props: SharedDrawerChildrenProps) => React.ReactNode;
}

export interface SharedDrawerChildrenProps {
    closeHandler: () => void;
    submitHandler: () => void;
}

export interface SharedDrawerOverlayProps {
    isOpened: boolean;
    children: React.ReactNode;
}