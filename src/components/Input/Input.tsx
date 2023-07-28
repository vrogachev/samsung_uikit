import React, {FC, useState} from "react";
import styles from "./Input.module.scss";
import {SharedInputProps} from "../../shared/types/input";
import {useFocus} from "../../interactions/focus/useFocus";

const Input:FC<SharedInputProps> = (props) => {
  const { loading = false, error = false , ...otherProps } = props;

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
      aria-invalid={error}
      data-loading={loading}
      data-focused={isFocused}
      className={styles.Input}
      data-disabled={otherProps.disabled}
    />
  );
};

export default Input;
