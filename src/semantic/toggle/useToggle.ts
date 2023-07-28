import { usePress } from "../../interactions/press/usePress";
import { CommonToggleProps } from "../../shared/types/toggle";
import { mergeProps } from "../../libs/merge-props/merge-props";
import { HTMLAttributes, InputHTMLAttributes, RefObject } from "react";
import { useFocusable } from "../../interactions/focusable/useFocusable";

interface UseToggleResult {
    isPressed: boolean
    rootProps: HTMLAttributes<HTMLElement>
    inputProps: InputHTMLAttributes<HTMLInputElement>
}

export default function useToggle(
    props: CommonToggleProps,
    inputRef: RefObject<HTMLInputElement>,
): UseToggleResult  {
    const { onChange, readOnly, state, ...restProps } = props
    const { focusableProps } = useFocusable(props, inputRef)
    const { isPressed, pressProps } = usePress(props)

    return {
        isPressed,
        rootProps: pressProps,
        inputProps: mergeProps(restProps, focusableProps, {
            'aria-checked': props.checked,
            'aria-invalid': state === 'invalid' || undefined,
            'aria-readonly': readOnly || undefined,
            onChange: readOnly ? undefined : onChange,
            type: 'checkbox',
        })
    }
}