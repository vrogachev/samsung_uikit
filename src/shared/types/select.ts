import { ElementTypeProps } from './element';
import React from "react";

export interface SharedSelectProps<T = HTMLElement> extends ElementTypeProps {
  loading?: boolean;
  disabled?: false,
  placeholder?: string;
  searchable?: boolean;
  options: ISelectOption[];
  onChange: (option: ISelectOption) => void;
}

export interface ISelectOption {
  value: string;
  label: string;
  options?: Record<string, any>
}

export interface ISelectOptionProps {
  option: ISelectOption;
  onChange: (option: ISelectOption) => void;
}

export interface SelectListProps {
  filter: string;
  opened: boolean;
  options: ISelectOption[];
  option: (item: ISelectOption) => React.ReactNode;
}
