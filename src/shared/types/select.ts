import { ElementTypeProps } from './element';

export interface SharedSelectProps<T = HTMLElement> extends ElementTypeProps {
  loading?: boolean;
  searchable?: boolean;
  options: SelectOption[];
}

export interface SelectOption {
  value: string;
  label: string;
  options?: Record<string, any>
}