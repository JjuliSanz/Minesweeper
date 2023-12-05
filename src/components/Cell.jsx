import React, { useContext, useEffect, useState } from "react";
import { MineContext } from "../context/MineContext";

const Cell = ({ cell, revealMines, isMineRevealed }) => {
  const [clicked, setClicked] = useState(null);
  const { isPlaying, ended, difficulty, setPoints } = useContext(MineContext);
  let colorClass;

  if (!clicked) {
    colorClass = "bg-gray-100 text-transparent";
  } else if (clicked) {
    switch (cell) {
      case "*":
        colorClass = "text-2xl"; // Estilo para mina
        break;
      case 0:
        colorClass = "text-transparent";
        break;
      case 1:
        colorClass = "text-blue-700";
        break;
      case 2:
        colorClass = "text-green-700";
        break;
      case 3:
        colorClass = "text-red-700";
        break;
      default:
        colorClass = "";
    }
  }

  const handleClick = () => {
    if (isPlaying) {
      setClicked(true);
      if (cell === "*") {
        revealMines();
      } else {
        setPoints((prevPoints) => prevPoints + 1);
      }
    }
  };

  // Add conditional styling for revealed mines
  if (isMineRevealed && cell === "*" && ended) {
    colorClass = "text-2xl"; // Modify styling for revealed mines
  }

  useEffect(() => {
    setClicked(false);
  }, [difficulty, isPlaying]);

  return (
    <button
      className={`border-2 border-gray ${
        difficulty === "easy"
          ? "w-[38px] h-[38px]"
          : difficulty === "medium"
          ? "w-[38px] h-[38px]"
          : difficulty === "hard"
          ? "w-[38px] h-[38px]"
          : ""
      } flex items-center justify-center text-4xl font-semibold ${colorClass} ${
        !isPlaying && "cursor-default"
      } ${isPlaying && "hover:bg-gray-200"}`}
      onClick={() => handleClick()}
    >
      {cell === 0
        ? "\u00A0"
        : cell === "*"
        ? "💣"
        : cell === 1
        ? "1"
        : cell === 2
        ? "2"
        : cell === 3
        ? "3"
        : cell}
    </button>
  );
};

export default Cell;
