import React, {FC, useRef} from 'react';
import styles from "./Avatar.module.scss";
import {SharedAvatarProps} from "../../shared/types/avatar";
import {clsx} from "clsx";

const Avatar:FC<SharedAvatarProps> = (props) => {
    const { avatar, firstName, lastName, size = "small" } = props;

    const className = clsx([
        styles.Avatar,
        styles[`Avatar_size--${size}`],
    ]);

    return (
        <div className={className}>
            { !avatar && <div className={styles.Avatar__placeholder}>{firstName.split('')[0]}{lastName.split('')[0]}</div>}
            <div className={styles.Avatar__online}></div>
            { avatar && <div className={styles.Avatar__image}><img src={avatar} alt={`${firstName} ${lastName}`}/> </div> }
        </div>
    );
};

export default Avatar;