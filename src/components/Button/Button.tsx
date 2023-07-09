import React, { FC, useRef } from "react";
import styles from "./Button.module.scss";
import { useHover } from "../../interactions/hover";
import { SharedButtonProps } from "../../shared/types/button";


const Button:FC<SharedButtonProps> = (props) => {
  const { label, onClick, size = 'small', theme = 'default', ...otherProps} = props;
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const { isHovered, hoverProps } = useHover(otherProps);

  return (
    <button
      {...otherProps}
      {...hoverProps}
      ref={buttonRef}
      onClick={onClick}
      data-size={size}
      data-theme={theme}
      data-hovered={isHovered}
      className={styles.Button}
      data-loading={otherProps.loading}
      data-disabled={otherProps.disabled}
     >
      {label}
    </button>
  );
};

export default Button;