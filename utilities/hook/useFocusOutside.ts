import { useEffect } from "react";

export function useFocusOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: () => void,
) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleFocusOut = (event: FocusEvent) => {
      if (ref.current && !ref.current.contains(event.relatedTarget as Node)) {
        handler();
      }
    };

    node.addEventListener("focusout", handleFocusOut);
    return () => {
      node.removeEventListener("focusout", handleFocusOut);
    };
  }, [ref, handler]);
}
