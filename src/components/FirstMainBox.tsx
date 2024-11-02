"use client";
import OvalShape from "./Oval";
import { useEffect, useRef } from "react";
export const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
  event.preventDefault();
};
const FirstMainBox = () => {
  const ovalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = ovalRef.current;
    const preventDefault = (event: MouseEvent | WheelEvent) => {
      event.preventDefault();
    };
    if (container) {
      container.addEventListener("mousedown", preventDefault);
      container.addEventListener("mouseup", preventDefault);
      container.addEventListener("mousemove", preventDefault);
      container.addEventListener("wheel", preventDefault, { passive: false });
      container.style.overflow = "hidden";
      return () => {
        container.removeEventListener("mousedown", preventDefault);
        container.removeEventListener("mouseup", preventDefault);
        container.removeEventListener("mousemove", preventDefault);
        container.removeEventListener("wheel", preventDefault);
      };
    }
  }, []);
  return (
    <div
      className={`bg-[#171717] subContainer overflow-hidden no-scrollbar w-full h-[100vh] relative snap-start`}
    >
      <div
        onWheel={handleScroll}
        ref={ovalRef}
        className="w-full z-20 border-b-4 border-b-[#212121] relative self-end h-40 overflow-hidden no-scrollbar top-[100%] translate-y-[-100%]"
      >
        <OvalShape />
      </div>
    </div>
  );
};

export default FirstMainBox;
