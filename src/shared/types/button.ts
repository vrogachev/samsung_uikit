import { ElementTypeProps } from './element';

export interface SharedButtonProps<T = HTMLElement> extends ElementTypeProps {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  size?: 'small' | 'large';
  type?: 'button' | 'submit' | 'reset';
  theme?: 'default' | 'primary' | 'accent' | 'danger' | 'link' | 'text';
}