import styles from "./SelectSearch.module.scss";
import React, { forwardRef, HTMLAttributes } from 'react';


const SelectSearch = forwardRef<HTMLInputElement, HTMLAttributes<HTMLInputElement>>((props, ref) => {
  return (
    <input className={styles.Search} ref={ref} {...props} />
  );
});

export default SelectSearch;
