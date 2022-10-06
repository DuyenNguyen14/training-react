import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ResponsiveItem(props) {
  // props: {component, componentMobile}
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleOnresize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.onresize = handleOnresize;
    return () => {
      window.removeEventListener("resize", handleOnresize);
    };
  }, []);

  if (screen.width < 768 && props.componentMobile) {
    // Load component mobile
    return <props.componentMobile />;
  }
  // Load regular component
  return <props.component />;
}
