import styles from "./Drawer.module.scss";
import React, { FC, useRef } from 'react';
import { CSSTransition } from "react-transition-group";
import useDrawer from "../../semantic/drawer/useDrawer";
import { SharedDrawerOverlayProps } from "../../shared/types/drawer";

const overlayAnimation = {
    enter: styles.Overlay__enter,
    enterActive: styles.Overlay__enterActive,
    exit: styles.Overlay__exit,
    exitActive: styles.Overlay__exitActive,
};

const contentAnimation = {
    enter: styles.Container__enter,
    enterActive: styles.Container__enterActive,
    exit: styles.Container__exit,
    exitActive: styles.Container__exitActive,
};

const DrawerOverlay:FC<SharedDrawerOverlayProps> = (props) => {
    const { isOpened, children } = props;

    const { animation } = useDrawer({ isOpened });

    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className={styles.Wrapper} role="dialog">
            <CSSTransition
                mountOnEnter
                unmountOnExit
                timeout={300}
                in={animation}
                nodeRef={overlayRef}
                classNames={overlayAnimation}
            >
                <div
                    tabIndex={0}
                    role="button"
                    ref={overlayRef}
                    className={styles.Overlay}
                />
            </CSSTransition>
            <CSSTransition
                mountOnEnter
                unmountOnExit
                timeout={300}
                in={animation}
                nodeRef={contentRef}
                classNames={contentAnimation}
            >
                <div className={styles.Container} ref={contentRef}>
                    {children}
                </div>
            </CSSTransition>
        </div>
    );
};

export default DrawerOverlay;