import { useEffect, useState } from "react";

const ANIMATION_TIME = 500;

interface UseMountProps  {
    isOpened: boolean;
}

interface UseMountResult {
    mounted: boolean;
}

export default function useMount(
    props: UseMountProps,
): UseMountResult {
    const { isOpened } = props;
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        if (isOpened && !mounted) {
          setMounted(true)
        } else if (!isOpened && mounted) {
            const timeout = setTimeout(() => {
                setMounted(false)
            }, ANIMATION_TIME)

            return () => clearTimeout(timeout)
        }
    }, [isOpened])

    return {
        mounted
    }
}