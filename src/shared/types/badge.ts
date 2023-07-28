import { ElementTypeProps } from './element';

export interface SharedBadgeProps<T = HTMLInputElement> extends ElementTypeProps {
  count: number;
  children: React.ReactNode;
}
