import React, {FC} from 'react';
import Modal from "../Modal/Modal";
import styles from "./Dialog.module.scss";
import Typography from "../Typography/Typography";
import {SharedDialogProps} from "../../shared/types/dialog";
import Space from "../Space/Space";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const Dialog:FC<SharedDialogProps> = (props) => {
    const {
        title,
        description,
        danger = false,
        ...modalProps
    } = props;

    const buttonTheme = danger ? "danger" : "primary";
    const buttonLabel = danger ? "Удалить" : "Сохранить";

    return (
        <Modal {...modalProps}>
            <div className={styles.Dialog}>
                <div className={styles.Dialog__header}>
                    <Typography tag="h3">{title}</Typography>
                    <Icon name="close" onClick={modalProps.onClose} className={styles.Dialog__close} />
                </div>
                <div className={styles.Dialog__body}>
                    <Typography tag="p" weight="400">{description}</Typography>
                </div>
                <div className={styles.Dialog__footer}>
                    <Space>
                        <Button label="Отмена" theme="default" size="small" onClick={modalProps.onClose} />
                        <Button label={buttonLabel} theme={buttonTheme} size="small" onClick={modalProps.onSubmit} />
                    </Space>
                </div>
            </div>
        </Modal>
    );
};

export default Dialog;