import React, {FC} from 'react';
import styles from "./Empty.module.scss";
import Icon from "../Icon/Icon";
import Typography from "../Typography/Typography";
import {SharedEmptyProps} from "../../shared/types/empty";

const Empty:FC<SharedEmptyProps> = (props) => {
    const { title, description } = props;
    return (
        <div className={styles.Empty}>
            <Icon name="empty" className={styles.Empty__icon} />
            { title && <Typography tag="h2" weight="600" className={styles.Empty__title}>{title}</Typography> }
            { description && <Typography tag="p" className={styles.Empty__description}>{description}</Typography> }
        </div>
    );
};

export default Empty;