import React, {FC, useState} from "react";
import styles from "./Textarea.module.scss";
import {useFocus} from "../../interactions/focus/useFocus";
import {SharedTextareaProps} from "../../shared/types/textarea";

const Textarea:FC<SharedTextareaProps> = (props) => {
  const { loading = false, ...otherProps } = props;

  const [isFocused, onFocusChange] = useState<boolean>(false);

  const { focusProps } = useFocus<HTMLTextAreaElement>({
    disabled: otherProps.disabled,
    onFocusChange: (v) => {
      onFocusChange(v);
      props.onFocusChange?.(v)
    }
  });

  return (
    <textarea
      {...otherProps}
      {...focusProps}
      data-focused={isFocused}
      data-loading={loading}
      className={styles.Textarea}
      data-disabled={otherProps.disabled}
    />
  );
};

export default Textarea;
