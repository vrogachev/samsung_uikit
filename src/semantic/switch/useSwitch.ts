import {HTMLAttributes, InputHTMLAttributes, RefObject} from "react";
import {CommonToggleProps} from "../../shared/types/toggle";
import useToggle from "../toggle/useToggle";

interface UseSwitchResult {
    isPressed: boolean
    rootProps: HTMLAttributes<HTMLElement>
    inputProps: InputHTMLAttributes<HTMLInputElement>;
}
export default function useSwitch(
    props: CommonToggleProps,
    inputRef: RefObject<HTMLInputElement>,
): UseSwitchResult  {
    const toggle = useToggle(props, inputRef)

    return {
        ...toggle,
        inputProps: {
            ...toggle.inputProps,
            role: 'switch',
        },
    }
}