import { clsx } from "clsx";
import React, { FC, useRef } from 'react';
import styles from "./Switch.module.scss"
import useSwitch from "../../semantic/switch/useSwitch";
import { ToggleBaseProps } from "../../shared/types/toggle";
import Typography from "../Typography/Typography";

const Switch:FC<ToggleBaseProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const { rootProps, isPressed, inputProps } = useSwitch(props, inputRef)

    console.log(inputProps);

    return (
        <label
            {...rootProps}
            className={clsx(styles.Label, {
                [styles['Label--pressed']]: isPressed
            })}
        >
            <input
                ref={inputRef}
                {...inputProps}
                className={styles.Input}
            />
            <div className={clsx(styles.Switch, {
                [styles['Switch--pressed']]: props.checked
            })}>
                <div className={clsx(styles.Toggle, {
                    [styles['Toggle--pressed']]: props.checked
                })}
                />
            </div>
            <Typography className={styles.Text} weight="500">Верный ответ</Typography>
        </label>
    );
};


export default Switch;