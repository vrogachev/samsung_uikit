import { ElementTypeProps } from './element';
import {ChangeEventHandler, FocusEvent, HTMLAttributes} from "react";

export interface SharedInputProps<T = HTMLInputElement> extends ElementTypeProps, InputBaseProps {
  loading?: boolean;
  error?: boolean;
  placeholder?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<T>;
  onFocus?: (event: FocusEvent<T>) => void;
  onBlur?: (event: FocusEvent<T>) => void;
  onFocusChange?: (isFocused: boolean) => void;
}

export interface SharedInputElement<T = HTMLInputElement> extends HTMLAttributes<T> {
  'data-focused'?: boolean;
}

export interface ValidationProps {
  state?: ValidationState
  required?: boolean
}

export interface InputBaseProps {
  disabled?: boolean
  name?: string
  readOnly?: boolean
}

export type ValidationState = 'valid' | 'invalid'
