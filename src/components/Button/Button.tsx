import React, { FC } from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

const Button:FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};

export default Button;