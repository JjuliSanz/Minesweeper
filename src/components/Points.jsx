import React, { useContext, useEffect } from "react";
import { MineContext } from "../context/MineContext";

const Points = () => {
  const { points, setPoints, isPlaying, ended, difficulty } =
    useContext(MineContext);

  useEffect(() => {
    if (ended === false) {
      setPoints(0);
    }
  }, [difficulty, isPlaying, ended]);

  // Format seconds to two digits
  const formattedPoints = points.toString().padStart(3, "0");

  return (
    <div
      className="border-4 border-t-gray-500 border-l-gray-500 border-r-gray-100 border-b-gray-100 bg-red-950 w-[65px] h-[45px] text-red-500 flex justify-center items-center text-3xl"
      style={{ fontFamily: '"LCD", sans-serif' }}
    >
      {formattedPoints}
    </div>
  );
};

export default Points;
