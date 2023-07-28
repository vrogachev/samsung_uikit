import { FC } from "react";
import Portal from "../Portal/Portal";
import styles from "./Drawer.module.scss"
import DrawerOverlay from "./DrawerOverlay";
import useMount from "../../semantic/mount/useMount";
import { SharedDrawerProps } from "../../shared/types/drawer";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

const Drawer:FC<SharedDrawerProps> = (props) => {
    const {
        isOpened,
        onClose,
        onSubmit,
        title,
        children
    } = props;

    const { mounted } = useMount({ isOpened });

    if (!mounted) return null;

    return (
        <Portal>
            <DrawerOverlay isOpened={isOpened}>
                <>
                    <div className={styles.Header}>
                        <Typography tag="h2">{title}</Typography>
                    </div>
                    <div className={styles.Content}>
                        { children({
                            closeHandler: onClose,
                            submitHandler: onSubmit
                        }) }
                    </div>
                    <div className={styles.Footer}>
                        <Button
                            label="Отмена"
                            onClick={onClose}
                        />
                        <Button
                            theme="primary"
                            onClick={onSubmit}
                            label="Сохранить и выйти"
                        />
                    </div>
                </>
            </DrawerOverlay>
        </Portal>
    )
}

export default Drawer;