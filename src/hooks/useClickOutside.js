import { useEffect } from "react";

const useClickOutside = (ref, action) => {
  const clickHandler = (event) => {
    if (!ref) {
      return;
    }

    if (event.target instanceof Node && !ref.current.contains(event.target)) {
      action();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
    // eslint-disable-next-line
  }, []);
};

export default useClickOutside;
