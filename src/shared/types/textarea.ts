import { ElementTypeProps } from './element';
import { ChangeEventHandler, FocusEvent } from "react";

export interface SharedTextareaProps<T = HTMLTextAreaElement> extends ElementTypeProps {
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<T>;
  onFocus?: (event: FocusEvent<T>) => void;
  onBlur?: (event: FocusEvent<T>) => void;
  onFocusChange?: (isFocused: boolean) => void;
}
