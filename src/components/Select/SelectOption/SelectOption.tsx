import React, { FC } from "react";
import styles from "./SelectOption.module.scss";
import { SelectOption } from "../../../shared/types/select";

interface SelectOptionProps {
  option: SelectOption;
  onChange: (option: SelectOption) => void;
}

const SelectOption:FC<SelectOptionProps> = (props) => {
  const { option, ...otherProps } = props;

  return (
    <div className={styles.Option} {...otherProps} onClick={() => props.onChange(option.value)}>
      {option.label}
    </div>
  );
};

export default SelectOption;