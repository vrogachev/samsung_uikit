import { ElementTypeProps } from './element';
import {IconName} from "../../components/Icon";

export interface SharedButtonProps<T = HTMLElement> extends ElementTypeProps {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  icon?: IconName;
  size?: 'small' | 'large';
  type?: 'button' | 'submit' | 'reset';
  theme?: 'default' | 'primary' | 'accent' | 'danger' | 'link' | 'text';
}