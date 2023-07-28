"use client";

import React, { FC } from 'react';
import styles from "./Label.module.scss";
import {SharedLabelProps} from "../../shared/types/label";

const Label:FC<SharedLabelProps> = (props) => {
    const { text } = props;
    return (
        <label className={styles.Label}>
            {text}:
        </label>
    );
};

export default Label;