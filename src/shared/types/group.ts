import React from "react";
import { ElementTypeProps } from './element';

export interface SharedGroupProps<T = HTMLElement> extends ElementTypeProps {
  children: React.ReactNode;
}