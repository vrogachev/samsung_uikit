import React, {FC, useRef} from 'react';
import styles from "./Checkbox.module.scss";
import {useHover} from "../../interactions/hover";
import Typography from "../Typography/Typography";
import {useCheckbox} from "../../semantic/checkbox/useCheckbox";
import {SharedCheckboxProps} from "../../shared/types/checkbox";
import Icon from "../Icon/Icon";

const Checkbox: FC<SharedCheckboxProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const { hoverProps } = useHover(props)
    const { isPressed, rootProps, inputProps } = useCheckbox(props, inputRef)

    return (
        <label
            {...rootProps}
            {...hoverProps}
            className={styles.Label}
            style={{ opacity: isPressed || props.disabled ? 0.5 : 1 }}
        >
            <input ref={inputRef} {...inputProps} className={styles.Input} />
            <span className={styles.Mark}>
                { props.checked && <Icon name="check" /> }
            </span>
            <Typography weight="500" className={styles.Text}>{props.label}</Typography>
        </label>
    )
}

export default Checkbox;