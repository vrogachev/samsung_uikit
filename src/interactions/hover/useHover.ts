import { HTMLAttributes, useMemo, useRef, useState } from "react";

export interface UseHoverProps {
  disabled?: boolean;
  loading?: boolean;
}

export interface UseHoverResult {
  isHovered: boolean;
  hoverProps: HTMLAttributes<HTMLElement>;
}

/*
  useHover - хук, принимает в качестве входных параметров UseHoverProps, возвращает UseHoverResult.
  isHovered (boolean) - текущий статус наводки,
  hoverProps (HTMLAttributes<HTMLElement>) - onPointerEnter, onPointerLeave
*/
export function useHover(props: UseHoverProps): UseHoverResult  {
  const [isHovered, setHovered] = useState<boolean>(false);
  const propsRef = useRef<UseHoverProps>({ });

  propsRef.current = { disabled: props.disabled || props.loading };

  const hoverProps = useMemo(() => {
    const props: HTMLAttributes<HTMLElement> = {};

    props.onPointerEnter = () => {
      const { disabled } = propsRef.current;

      if (disabled) return;

      setHovered(true);
    }

    props.onPointerLeave = () => {
      setHovered(false);
    }

    return props;
  }, [])

  return {
    isHovered,
    hoverProps
  }
}