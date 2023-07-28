import ReactDOM from "react-dom";
import React, { FC, useEffect, useState } from 'react';
import { SharedPortalProps } from "../../shared/types/portal";

const Portal:FC<SharedPortalProps> = ({ children }) => {
    const [container] = useState(() => document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
    }, [container]);

    return ReactDOM.createPortal(children, container);
};

export default Portal;