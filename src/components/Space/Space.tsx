import React, { FC } from 'react';
import styles from './Space.module.scss';
import { SharedSpaceProps } from "../../shared/types/space";

const Space:FC<SharedSpaceProps> = (props) => {
    const { children } = props;
    return (
        <div className={styles.Space}>
            {children}
        </div>
    );
};

export default Space;