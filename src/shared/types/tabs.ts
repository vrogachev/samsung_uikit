import React from "react";

export interface SharedTabsProps {
 tabs: SharedTabItemProps[];
}

export interface SharedTabItemProps {
  label: string;
  content: () => React.ReactNode;
}
