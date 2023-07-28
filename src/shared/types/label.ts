import { ElementTypeProps } from './element';

export interface SharedLabelProps<T = HTMLLabelElement> extends ElementTypeProps {
  text: string;
}
