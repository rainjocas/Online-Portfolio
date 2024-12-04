import { useState, useEffect } from "react";

type ScreenType = "mobile" | "desktop";

/**
 * Use Screen Type component:
 * Detects the type of screen the user is using based on their screen size
 * @returns the type of screen the user is using
 */
const useScreenType = (): ScreenType => {
  const [screenType, setScreenType] = useState<ScreenType>("desktop");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1000) {
        setScreenType("mobile");
      } else {
        setScreenType("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial screen type check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
};

export default useScreenType;