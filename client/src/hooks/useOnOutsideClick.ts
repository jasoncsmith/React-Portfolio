import { RefObject, useEffect } from 'react'

/**
 * React hook
 * intitializes on mount and will start clicklogging, so if not wanted until a condition, will have to add a condition to dep array
 *
 * @param {function} cb fn to call when activated
 * @param {boolean} closeOnEscape dictates whether should close on the esc key being pressed
 * @returns {RefObject}
 */
export const useOnOutsideClick = <T extends HTMLElement | null>(
  ref: RefObject<T>,
  cb: () => void,
  closeOnOutsideClick = true
) => {
  useEffect(() => {
    function closeOnClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as T)) {
        cb()
      }
    }

    if (closeOnOutsideClick) document.addEventListener('click', closeOnClick, true)

    return () => {
      document.removeEventListener('click', closeOnClick, true)
    }
  }, [ref, cb, closeOnOutsideClick])
}

export const useOnKeyCode = (cb: () => void, buttonCode = '') => {
  useEffect(() => {
    function closeOnKeyUp(e: KeyboardEvent) {
      if (e.code === buttonCode) {
        cb()
      }
    }

    if (buttonCode) document.addEventListener('keyup', closeOnKeyUp, true)

    return () => {
      document.removeEventListener('keyup', closeOnKeyUp, true)
    }
  }, [cb, buttonCode])
}
