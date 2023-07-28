import { ElementTypeProps } from './element';
import React from "react";
import {IconName} from "../../components/Icon";

export interface SharedMenuProps<T = HTMLElement> extends ElementTypeProps {
  body: () => React.ReactNode;
  footer: () => React.ReactNode;
}

export interface SharedLinkMenuProps<T = HTMLElement> extends ElementTypeProps {
  icon: IconName;
  onClick: () => void;
  children: React.ReactNode;
}
