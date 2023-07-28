import {ChangeEventHandler} from "react";
import {FocusableDOMProps} from "./dom";
import {InputBaseProps, ValidationProps} from "./input";

export interface ToggleBaseProps extends InputBaseProps, FocusableDOMProps {
    checked?: boolean
    defaultChecked?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: string
}

export interface CommonToggleProps extends ToggleBaseProps, ValidationProps {}