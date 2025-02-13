import React from "react";
import { ShapeAnimation } from "./ShapeAnimation";

const LeftCol = () => {
  return (
    <div>
      <ShapeAnimation order={[0, 2, 1, 1, 6, 8, 1, 7, 7, 3, 9, 10, 2, 5, 5]} />
    </div>
  );
};

const MidCol = () => {
  return (
    <div>
      <ShapeAnimation
        order={[1, 3, 2, 6, 7, 9, 9, 3, 3, 8, 2, 5, 4, 6, 1, 1]}
      />
    </div>
  );
};

const RightCol = () => {
  return (
    <div>
      <ShapeAnimation order={[0, 4, 5, 9, 4, 4, 2, 2, 10, 4, 4, 4, 9, 8, 8]} />
    </div>
  );
};

const AnimatedHero = () => {
  return (
    <div className="flex flex-row gap-x-10 items-center justify-center bg-cardinal-red-dark w-screen h-screen">
      <div className="w-1/3">
        <LeftCol />
      </div>
      <div className="w-1/3">
        <MidCol />
      </div>
      <div className="w-1/3">
        <RightCol />
      </div>
    </div>
  );
};

export default AnimatedHero;
