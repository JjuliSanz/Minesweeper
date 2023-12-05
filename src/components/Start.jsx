import React, { useContext } from "react";
import { MineContext } from "../context/MineContext";

const Start = ({ generateBoard }) => {
  const { setBoard, setIsPlaying, isPlaying, setEnded, rows, cols, numMines } =
    useContext(MineContext);
  const start = () => {
    if (isPlaying === false) {
      setIsPlaying(true);
      setEnded(false);
      setBoard(generateBoard(rows, cols, numMines));
    } else {
      setEnded(true);
      setIsPlaying(false);
    }
  };

  return (
    <div className="mt-4 sm:mt-0 w-full h-full flex justify-center items-center">
      <button
        className="w-[200px] h-[50px] rounded border-8 border-r-gray-500 border-b-gray-500 border-l-gray-100 border-t-gray-100 font-bold"
        style={{ fontFamily: '"LCD", sans-serif' }}
        onClick={() => start()}
      >
        {!isPlaying ? "Start" : "End"}
      </button>
    </div>
  );
};

export default Start;
