import React, { useState, useEffect } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      if (scroll > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button onClick={handleScrollUp}>
          <ArrowUpCircleIcon className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-transparent shadow-md cursor-pointer hover:text-orange-400" />
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;
