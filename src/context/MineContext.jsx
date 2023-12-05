import React, { createContext, useEffect, useState } from "react";

const MineContext = createContext();

const MineProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState("easy");
  const [isPlaying, setIsPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const rows = 10;
  const difficultyOptions = {
    easy: 10,
    medium: 20,
    hard: 30,
  };
  const cols = difficultyOptions[difficulty];
  const numMines =
    difficulty === "easy" ? 20 : difficulty === "medium" ? 40 : 60;
  const [board, setBoard] = useState(
    new Array(10).fill(0).map(() => new Array(10).fill(0))
  );
  const [points, setPoints] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const contextValue = {
    board,
    setBoard,
    difficulty,
    setDifficulty,
    isPlaying,
    setIsPlaying,
    ended,
    setEnded,
    rows,
    cols,
    numMines,
    difficultyOptions,
    points,
    setPoints,
    seconds,
    setSeconds
  };

  return (
    <MineContext.Provider value={contextValue}>{children}</MineContext.Provider>
  );
};

export { MineProvider, MineContext };
