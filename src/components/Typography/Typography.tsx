import { clsx } from "clsx";
import React, {FC} from 'react';
import styles from "./Typography.module.scss";
import { SharedTypographyProps } from "../../shared/types/typography";

const Typography:FC<SharedTypographyProps> = (props) => {
    const {
        tag = 'p',
        weight = "400",
        children,
        className
    } = props;

    const classNames = clsx([
        styles.Typography,
        styles[`Typography_size--${tag}`],
        styles[`Typography_weight--${weight}`],
        className
    ]);

    return React.createElement(tag, {
        className: classNames,
        "data-tag": tag
    }, children);
};

export default Typography;