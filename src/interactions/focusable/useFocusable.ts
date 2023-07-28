import { HTMLAttributes, RefObject } from 'react'
import { FocusableDOMProps } from "../../shared/types/dom";


export interface UseFocusableProps extends FocusableDOMProps {
    disabled?: boolean
}

export interface UseFocusableResult<T> {
    focusableProps: HTMLAttributes<T>
}

export function useFocusable<T extends HTMLElement = HTMLElement>(
    props: UseFocusableProps,
    ref: RefObject<T>,
): UseFocusableResult<T> {
    const { disabled, tabIndex } = props


    return {
        focusableProps: {
            tabIndex: disabled ? -1 : tabIndex,
        },
    }
}