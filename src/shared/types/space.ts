import React from "react";
import { ElementTypeProps } from './element';

export interface SharedSpaceProps<T = HTMLElement> extends ElementTypeProps {
  children: React.ReactNode;
}
