import React from 'react';
import MenuLink from "./MenuLink";
import styles from "./Menu.module.scss";
import { SharedMenuProps } from "../../shared/types/menu";

const Menu = (props: SharedMenuProps) => {
  const { body, footer } = props;
  return (
    <div className={styles.Menu}>
      <div>
        {body()}
      </div>
      <div>
        {footer()}
      </div>
    </div>
  );
};

Menu.Link = MenuLink;

export default Menu;
