"use client";

import { handleScroll } from "./FirstMainBox";

const OvalShape = () => {
  return (
    <div
      onWheel={handleScroll}
      className={`w-[200%]  aspect-square no-scrollbar overflow-hidden rounded-full bg-[#212121] absolute top-[100%] -translate-y-[4%] translate-x-[-25%]`}
    ></div>
  );
};
export default OvalShape;
