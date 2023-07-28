import {FocusableDOMProps} from "./dom";
import {ChangeEventHandler} from "react";
import {InputBaseProps, ValidationProps} from "./input";

export interface ToggleBaseProps extends InputBaseProps, FocusableDOMProps {
  checked?: boolean
  value?: string
  label?: string;
  defaultChecked?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export interface SharedCheckboxProps extends ToggleBaseProps, ValidationProps {}