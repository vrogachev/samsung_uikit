import { FC, useRef } from "react";
import styles from "./Icon.module.scss";
import * as icons from "../../assets/icons";
import { useHover } from "../../interactions/hover";

export type IconName = keyof typeof icons;
export type IconSize = "small" | "middle" | "large";

interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
  onClick?: () => void;
}

const Icon:FC<IconProps> = (props) => {
  const { name, size = "small", className, onClick } = props;
  const iconRef = useRef<HTMLSpanElement | null>(null);

  const clickable = !!onClick;
  const Icon = icons[name];

  const { isHovered, hoverProps } = useHover({ disabled: !clickable });

  return (
    <span
      {...hoverProps}
      ref={iconRef}
      data-size={size}
      onClick={onClick}
      data-hovered={isHovered}
      data-clickable={clickable}
      className={[className, styles.icon].join(' ')}
    >
		<Icon />
	</span>
  );
}


export default Icon;
