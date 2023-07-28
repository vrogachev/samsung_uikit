import React from 'react';
import styles from "./SelectEmpty.module.scss";

const SelectEmpty = () => {
  return (
    <div className={styles.Empty}>
      <p>По вашему запросу ничего не найдено</p>
    </div>
  );
};

export default SelectEmpty;
