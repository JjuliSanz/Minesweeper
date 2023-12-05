import React, { useContext } from "react";
import Cell from "./Cell";
import { MineContext } from "../context/MineContext";

const Panel = ({ revealMines, revealedMines }) => {
  const { board, difficulty } = useContext(MineContext);

  return (
    <div
      className={` ${
        difficulty === "easy"
          ? "grid grid-cols-10"
          : difficulty === "medium"
          ? "grid grid-cols-20"
          : difficulty === "hard"
          ? "w-[1150px] grid grid-cols-30"
          : ""
      } w-auto h-auto border-8 border-t-gray-500 border-l-gray-500`}
    >
      {board.flat().map((cell, index) => (
        <div key={index}>
          <Cell
            cell={cell}
            revealMines={revealMines}
            isMineRevealed={revealedMines.includes("*")}
          />
        </div>
      ))}
    </div>
  );
};

export default Panel;
