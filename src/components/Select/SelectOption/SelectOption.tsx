import styles from "./SelectOption.module.scss";
import { ISelectOptionProps } from "../../../shared/types/select";
import React, { FC, HTMLAttributes, KeyboardEvent, useCallback, useMemo } from 'react';

const SelectOption:FC<ISelectOptionProps> = (props) => {
  const { option, ...otherProps } = props;

  const handleSelect = useCallback(() => {
    otherProps.onChange(option);
  }, [option]);

  const handleEnterPress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Enter") return;
    handleSelect();
  }

  const handlers = useMemo(() => {
    const props: HTMLAttributes<HTMLElement> = {};

    props.onClick = handleSelect;
    props.onKeyDown = (e) => handleEnterPress(e);

    return props;
  }, []);

  return (
    <div
      tabIndex={0}
      role="option"
      {...handlers}
      className={styles.Item}
    >
      {option.label}
    </div>
  );
};

export default SelectOption;
