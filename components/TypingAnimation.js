// components/TypingAnimation.js
"use client"; // Mark this as a client component

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingAnimation() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Welcome to Yash's Blog"], // The text to type
      typeSpeed: 50, // Typing speed
      backSpeed: 30, // Backspacing speed
      showCursor: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return <span ref={typedElement}></span>;
}
