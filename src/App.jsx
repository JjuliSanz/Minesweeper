import "./App.css";
import { useContext, useState } from "react";
import Nav from "./components/Nav";
import Time from "./components/Time";
import Start from "./components/Start";
import Points from "./components/Points";
import Panel from "./components/Panel";

import { MineContext } from "./context/MineContext";

const generateBoard = (rows, cols, numMines) => {
  const board = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

  // Place random mines
  for (let i = 0; i < numMines; i++) {
    const randomRow = Math.floor(Math.random() * rows);
    const randomCol = Math.floor(Math.random() * cols);

    // Check if the position already has a mine
    if (board[randomRow][randomCol] === "*") {
      i--; // Try again if there is already a mine in that position
    } else {
      board[randomRow][randomCol] = "*";
    }
  }

  // Calculate neighbor numbers
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] !== "*") {
        // If the cell is not a mine, count mines around it
        let count = 0;
        for (let x = i - 1; x <= i + 1; x++) {
          for (let y = j - 1; y <= j + 1; y++) {
            if (
              x >= 0 &&
              x < rows &&
              y >= 0 &&
              y < cols &&
              board[x][y] === "*" &&
              count < 3
            ) {
              count++;
            }
          }
        }
        board[i][j] = count;
      }
    }
  }

  return board;
};

function App() {
  const [revealedMines, setRevealedMines] = useState([]);
  const { board, difficulty, setIsPlaying, ended, setEnded } =
    useContext(MineContext);

  const revealMines = () => {
    // Update the state to mark the mines as revealed
    setRevealedMines(board.flat().filter((cell) => cell === "*"));
    // Set the game as ended
    setEnded(true);
    setIsPlaying(false);
  };

  return (
    <>
      <div className="w-full h-screen bg-gray flex flex-col">
        <Nav />

        <main class="w-full h-full flex flex-col items-center">
          <div
            className={` ${
              difficulty === "easy"
                ? "w-[450px]"
                : difficulty === "medium"
                ? "w-[830px]"
                : difficulty === "hard"
                ? "w-[1200px]"
                : ""
            }  h-[510px] border-8 border-r-gray-500 border-b-gray-500 border-l-gray-100 border-t-gray-100 flex flex-col items-center mt-2 sm:mt-4 p-4 `}
          >
            {/* Counter  */}
            <header
              className={`${
                difficulty === "easy"
                  ? "w-[396px]"
                  : difficulty === "medium"
                  ? "w-[776px]"
                  : difficulty === "hard"
                  ? "w-[1150px]"
                  : ""
              }  h-[100px] border-8 border-t-gray-500 border-l-gray-500 border-r-gray-100 border-b-gray-100 flex justify-between items-center p-1`}
            >
              {/* Scoreboard  */}
              <Points />

              {/* EMOJI  */}
              <div className="border-4 border-t-gray-500 border-l-gray-500 bg-red-950 w-[55px] h-[45px] flex justify-center items-start text-3xl">
                {ended ? "😢" : "🙂"}
              </div>

              {/* TIMER  */}
              <Time />
            </header>
            {/* PANEL */}
            <Panel revealMines={revealMines} revealedMines={revealedMines} />
          </div>
          {/* START BUTTON */}
          <Start generateBoard={generateBoard} />
        </main>
      </div>
    </>
  );
}

export default App;
