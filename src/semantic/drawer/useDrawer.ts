import {useEffect, useState} from "react";

interface UseDrawerProps {
    isOpened: boolean;
}

interface UserDrawerResult {
    animation: boolean
}

export default function useDrawer(props: UseDrawerProps): UserDrawerResult {
    const { isOpened } = props;

    const [animation, startAnimation] = useState(false);

    useEffect(() => {
        startAnimation(isOpened)
    }, [isOpened]);

    return {
        animation,
    }
}