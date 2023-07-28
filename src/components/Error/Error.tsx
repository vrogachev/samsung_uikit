import React, { FC } from 'react';
import styles from "./Error.module.scss";
import { SharedLabelProps } from "../../shared/types/label";

const Error:FC<SharedLabelProps> = (props) => {
    const { text } = props;
    return (
        <span className={styles.Error}>
            {text}
        </span>
    );
};

export default Error;