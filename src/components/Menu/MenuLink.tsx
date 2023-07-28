import React, {FC} from 'react';
import styles from "./Menu.module.scss";
import Typography from "../Typography/Typography";
import {SharedLinkMenuProps} from "../../shared/types/menu";
import Icon from "../Icon/Icon";
import {useHover} from "../../interactions/hover";

const MenuLink: FC<SharedLinkMenuProps> = (props) => {
    const { children, onClick, icon } = props;
    const { isHovered, hoverProps } = useHover({ });

    return (
        <div className={styles.Link} onClick={onClick} {...hoverProps} data-hovered={isHovered}>
            <Icon name={icon} className={styles.Link__icon} />
            <Typography tag="span" weight="600">{children}</Typography>
        </div>
    );
};


export default MenuLink;
