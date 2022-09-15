import { useEffect, useRef } from "react";

export default function useCallbackOnMount(callback) {
  const firstLoad = useRef(true);
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return callback();
    }
  }, []);
}
