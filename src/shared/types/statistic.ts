
import { ElementTypeProps } from './element';
import { IconName } from "../../components/Icon";

export interface SharedStatisticProps<T = HTMLElement> extends ElementTypeProps {
  label: string;
  text: string;
  icon: IconName;
}
