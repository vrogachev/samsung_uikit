import { useCallback, useEffect, useRef } from 'react'

/* eslint-disable no-undef */
interface UseListenersResult {
    addListener<K extends keyof DocumentEventMap>(
        el: EventTarget,
        type: K,
        listener: (this: Document, ev: DocumentEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void
    addListener(
        el: EventTarget,
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void
    removeListener<K extends keyof DocumentEventMap>(
        el: EventTarget,
        type: K,
        listener: (this: Document, ev: DocumentEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void
    removeListener(
        el: EventTarget,
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void
    removeAllListeners(): void
}
/* eslint-enable no-undef */

export function useListeners(): UseListenersResult {
    const globalListeners = useRef(new Map())

    const addListener = useCallback((eventTarget: any, type: any, listener: any, options:any) => {
        globalListeners.current.set(listener, { type, eventTarget, options })
        eventTarget.addEventListener(type, listener, options)
    }, [])

    const removeListener = useCallback((eventTarget: any, type: any, listener: any, options:any) => {
        eventTarget.removeEventListener(type, listener, options)
        globalListeners.current.delete(listener)
    }, [])

    const removeAllListeners = useCallback(() => {
        globalListeners.current.forEach((value, key) => {
            removeListener(value.eventTarget, value.type, key, value.options)
        })
    }, [removeListener])

    useEffect(() => {
        return removeAllListeners
    }, [removeAllListeners])

    return { addListener, removeListener, removeAllListeners }
}