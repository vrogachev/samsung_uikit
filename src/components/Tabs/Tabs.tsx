import { clsx } from "clsx";
import styles from "./Tabs.module.scss";
import React, {FC, useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import { SharedTabsProps } from "../../shared/types/tabs";


const tabAnimation = {
    enter: styles.Tab__enter,
    enterActive: styles.Tab__enterActive,
    exit: styles.Tab__exit,
    exitActive: styles.Tab__exitActive,
};

const Tabs:FC<SharedTabsProps> = (props) => {
    const { tabs} = props;
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <div className={styles.Tabs}>
            <div className={styles.Tabs__header}>
                { tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={clsx(styles.Tabs__button, {
                            [styles.Tabs__button_active]: activeTab === index
                        })}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                )) }
            </div>
            <div className={styles.Tabs__content}>
                { tabs.map((tab, index) => (
                    <CSSTransition
                        key={index}
                        timeout={300}
                        unmountOnExit
                        in={activeTab === index}
                        classNames={tabAnimation}
                    >
                        <div className={styles.Tab}>
                            {tab.content()}
                        </div>
                    </CSSTransition>
                ))}
            </div>
        </div>
    );
};

export default Tabs;