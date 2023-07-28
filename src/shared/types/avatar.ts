import { ElementTypeProps } from './element';

export interface SharedAvatarProps<T = HTMLElement> extends ElementTypeProps {
  firstName: string;
  lastName: string;
  avatar?: string;
  size?: 'small' | 'big';
}
