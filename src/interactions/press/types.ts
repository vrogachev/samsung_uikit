import {PressEventProps} from "../../shared/types/events";

export interface PressProps<T = HTMLElement> extends PressEventProps<T> {
    disabled?: boolean
    preventFocusOnPress?: boolean
}