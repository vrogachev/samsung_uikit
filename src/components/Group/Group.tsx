import React, {FC} from 'react';
import styles from "./Group.module.scss";
import {SharedGroupProps} from "../../shared/types/group";

const Group:FC<SharedGroupProps> = (props) => {
    const { children } = props;
    return (
        <div className={styles.Group}>
            {children}
        </div>
    );
};

export default Group;