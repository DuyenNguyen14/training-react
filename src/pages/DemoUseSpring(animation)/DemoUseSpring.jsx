import React, { useEffect } from "react";
import { useState } from "react";
import { animated, useSpring } from "react-spring";

export default function DemoUseSpring() {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19" },
    ],
    from: {
      opacity: 0,
      color: "red",
    },
  });

  return (
    <animated.div className="container" style={styles}>
      I will fade in and out
    </animated.div>
  );
}
