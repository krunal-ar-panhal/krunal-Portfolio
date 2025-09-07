import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setScrollPercent(scrolled);

      if (scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative w-14 h-14 flex items-center justify-center rounded-full bg-black shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="#1e293b"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="#04D9FF"
            strokeWidth="4"
            fill="none"
            strokeDasharray={2 * Math.PI * 24}
            strokeDashoffset={2 * Math.PI * 24 * (1 - scrollPercent / 100)}
            strokeLinecap="round"
            className="transition-all duration-200"
          />
        </svg>

        <FaArrowUp className="text-[#04D9FF] text-xl relative z-10" />
      </button>
    </div>
  );
};

export default ScrollToTop;
