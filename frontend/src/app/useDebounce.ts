/* eslint-disable */
import { useCallback } from "react";

export const useDebounce = (fn: (...args: any) => void, delay: number = 1000) => {
  let timeout: ReturnType<typeof setTimeout>;

  const debounceCallback = useCallback((...args: any) => {

    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
    
  }, []);

  return debounceCallback;
};
