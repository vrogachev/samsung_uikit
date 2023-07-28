import React, {FC} from 'react';
import Icon from "../Icon/Icon";
import styles from "./Statistic.module.scss";
import Typography from "../Typography/Typography";
import {SharedStatisticProps} from "../../shared/types/statistic";

const Statistic:FC<SharedStatisticProps> = (props) => {
    const { icon, text, label } = props;
    return (
        <div className={styles.Statistic}>
            <div className={styles.Statistic__icon}>
                <Icon name={icon} />
            </div>
            <div className={styles.Statistic__text}>
                <Typography tag="p" weight="500" className={styles.Statistic__title}>{label}</Typography>
                <Typography tag="h5" weight="600">{text}</Typography>
            </div>
        </div>
    );
};

export default Statistic;