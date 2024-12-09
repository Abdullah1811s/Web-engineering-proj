import React, { useState, useEffect } from "react";

const HeroMain = () => {
  // Store mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Event listener to track mouse movements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Listen for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateXEyeMovement = (eyeX) => {
    const deltaX = mousePosition.x - eyeX - 800;

    const movement = Math.min(Math.max(deltaX / 60, -100), 20);

    return movement;
  };

  const calculateYEyeMovement = (eyeY) => {
    const deltaY = mousePosition.y - eyeY - 318;

    const movement = Math.min(Math.max(deltaY / 30, -1000), 20);

    return movement;
  };

  return (
    <div className="relative">
      <h1 className="text-[15em] max-sm:text-[9em] text-green-600 tracking-tighter bg-transparent m-0 leading-tight pt-0 pb-0 mt-7 max-sm:mt-14 mb-2 z-10">
        Kode!
      </h1>
      <div className="w-[5.7em] h-[5.5em] bg-green-400 rounded-full absolute top-[10.3em] left-[10.15em] z-10 max-sm:hidden" />
      <div className="w-[5.7em] h-[5.5em] bg-green-400 rounded-full absolute top-[10.3em] left-[19em] z-10 max-sm:hidden" />
      <div
        className="w-[4em] h-[4em] bg-gray-900 rounded-full absolute top-[10.8em] left-[11em] z-10 max-sm:hidden"
        style={{
          transform: `translateX(${calculateXEyeMovement(
            0
          )}px) translateY(${calculateYEyeMovement(0)}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div
        className="w-[4em] h-[4em] bg-gray-900 rounded-full absolute top-[10.8em] left-[19.8em] z-10 max-sm:hidden"
        style={{
          transform: `translateX(${calculateXEyeMovement(
            0
          )}px) translateY(${calculateYEyeMovement(0)}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div className="w-[6.5em] h-[7.05em] border-8 border-green-600 rounded-full absolute top-[8.85em] left-[9.75em] z-10 max-sm:hidden" />
      <div className="w-[6.3em] h-[7.05em] border-8 border-green-600 rounded-full absolute top-[8.85em] left-[18.63em] z-10 max-sm:hidden" />
      <p className="absolute bottom-0  left-1/2 w-[10.1em] text-green-400 -translate-x-1/2 text-[3em] max-sm:text-[1.8em] tracking-wide font-light">
        Your way to Victory
      </p>
    </div>
  );
};

export default HeroMain;
