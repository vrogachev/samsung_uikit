import React, {FC, useState} from "react";
import styles from "./Input.module.scss";
import {SharedInputProps} from "../../shared/types/input";
import {useFocus} from "../../interactions/focus/useFocus";

const Input:FC<SharedInputProps> = (props) => {
  const { loading = false, ...otherProps } = props;

  const [isFocused, onFocusChange] = useState<boolean>(false);

  const { focusProps } = useFocus<HTMLInputElement>({
    disabled: otherProps.disabled,
    onFocusChange: (v) => {
      onFocusChange(v);
      props.onFocusChange?.(v)
    }
  });

  return (
    <input
      {...otherProps}
      {...focusProps}
      data-focused={isFocused}
      data-loading={loading}
      className={styles.Input}
      data-disabled={otherProps.disabled}
    />
  );
};

export default Input;
