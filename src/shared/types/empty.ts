import { ElementTypeProps } from './element';

export interface SharedEmptyProps<T = HTMLInputElement> extends ElementTypeProps {
  title?: string;
  description?: string;
}
