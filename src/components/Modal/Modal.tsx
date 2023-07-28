import React, { FC } from 'react';
import Portal from "../Portal/Portal";
import ModalOverlay from "./ModalOverlay";
import useMount from "../../semantic/mount/useMount";
import {SharedModalProps} from "../../shared/types/modal";

const Modal:FC<SharedModalProps> = (props) => {
    const {
        isOpened,
        onClose,
        onSubmit,
        children
    } = props;

    const { mounted } = useMount({ isOpened });

    if (!mounted) return null;

    return (
        <Portal>
            <ModalOverlay isOpened={isOpened}>
                {children}
            </ModalOverlay>
        </Portal>
    )
};

export default Modal;