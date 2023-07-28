import React, { FC } from 'react';
import styles from "./Badge.module.scss";
import { SharedBadgeProps } from "../../shared/types/badge";


const Badge:FC<SharedBadgeProps> = ({ count, children }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Badge}>{count}</div>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};

export default Badge;
