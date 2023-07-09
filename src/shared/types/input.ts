import { ElementTypeProps } from './element';
import { ChangeEventHandler, FocusEvent } from "react";

export interface SharedInputProps<T = HTMLInputElement> extends ElementTypeProps {
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  onFocus?: (event: FocusEvent<T>) => void;
  onBlur?: (event: FocusEvent<T>) => void;
  onFocusChange?: (isFocused: boolean) => void;
  onChange?: (event: ChangeEventHandler<T>) => void;
}
