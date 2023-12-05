import React, { useContext, useEffect } from "react";
import { MineContext } from "../context/MineContext";

const Time = () => {
  const { isPlaying, difficulty, ended, seconds, setSeconds } = useContext(MineContext);

  useEffect(() => {
    let interval;
    if (isPlaying === true && ended === false) {
      setSeconds(0);
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, difficulty, ended]);

  // Format seconds to two digits
  const formattedSeconds = seconds.toString().padStart(3, "0");

  return (
    <div
      className="border-4 border-t-gray-500 border-l-gray-500 border-r-gray-100 border-b-gray-100 bg-red-950 w-[65px] h-[45px] text-red-500 flex justify-center items-center text-3xl"
      style={{ fontFamily: '"LCD", sans-serif' }}
    >
      {formattedSeconds}
    </div>
  );
};

export default Time;
