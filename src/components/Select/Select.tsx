import React, { FC, useRef, useState } from "react";
import styles from "./Select.module.scss";
import { SharedSelectProps } from "../../shared/types/select";
import SelectOption from "./SelectOption/SelectOption";
import useOutsideClick from "../../interactions/outside-click/useOutsideClick";
import useSelect from "../../semantic/select/useSelect";

const Select:FC<SharedSelectProps> = (props) => {
  const { options } = props;
  const select = useRef(null);

  const { selectActions, opened, selected } = useSelect({ loading: props.loading });

  useOutsideClick(select, () => selectActions.toggleHandler('close'));

  return (
    <div className={styles.Select} ref={select}>
      <div className={styles.Options}>
        { options.map(option => <SelectOption option={option} onChange={selectActions.selectHandler} />}
      </div>
    </div>
  );
};

export default Select;