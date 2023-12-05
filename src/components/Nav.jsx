import React, { useContext } from "react";
import { MineContext } from "../context/MineContext";

const Nav = () => {
  const {
    difficulty,
    setDifficulty,
    setIsPlaying,
    setEnded,
    setBoard,
    setSeconds,
  } = useContext(MineContext);

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
    setIsPlaying(false);
    setEnded(false);
    if (newDifficulty === "easy") {
      setBoard(new Array(10).fill(0).map(() => new Array(10).fill(0)));
    } else if (newDifficulty === "medium") {
      setBoard(new Array(10).fill(0).map(() => new Array(20).fill(0)));
    } else if (newDifficulty === "hard") {
      setBoard(new Array(10).fill(0).map(() => new Array(30).fill(0)));
    }
    setSeconds(0);
  };

  return (
    <nav className="w-full h-[50px] bg-[#C63838] grid sm:grid-cols-6 items-center ">
      {/* DIFFICULTY */}
      <div className="col-span-2 hidden sm:flex ml-4">
        <div
          className={`w-auto h-full p-1 flex items-center justify-center cursor-pointer ${
            difficulty === "easy" ? "border-2" : "opacity-[0.5] scale-[0.7]"
          }`}
          onClick={() => {
            handleDifficultyChange("easy");
          }}
        >
          <img src="buscamina.png" alt="bomb" className="w-[30px] h-[30px]" />
        </div>
        <div
          className={`w-auto h-full p-1 flex items-center justify-center cursor-pointer ${
            difficulty === "medium" ? "border-2" : "opacity-[0.5] scale-[0.7]"
          } `}
          onClick={() => {
            handleDifficultyChange("medium");
          }}
        >
          <img src="buscamina.png" alt="bomb" className="w-[30px] h-[30px]" />
          <img src="buscamina.png" alt="bomb" className="w-[30px] h-[30px]" />
        </div>
        <div
          className={`w-auto h-full p-1 flex items-center justify-center cursor-pointer ${
            difficulty === "hard" ? "border-2" : "opacity-[0.5] scale-[0.7]"
          } `}
          onClick={() => {
            handleDifficultyChange("hard");
          }}
        >
          <img src="buscamina.png" alt="bomb" className="w-[30px] h-[30px]" />
          <img src="buscamina.png" alt="bomb" className="w-[30px] h-[30px]" />
          <img src="buscamina.png" alt="bomb" className="w-[30px] h-[30px]" />
        </div>
      </div>
      {/* TITLE */}
      <div className="sm:col-span-2 h-full flex gap-3 items-center justify-center">
        <img
          src="buscamina.png"
          alt="bomb"
          className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"
        />
        <h1
          className="text-2xl sm:text-5xl text-white"
          style={{ fontFamily: '"LCD", sans-serif' }}
        >
          Minesweeper
        </h1>
      </div>
      <div className="col-span-2 hidden sm:flex justify-end gap-6 mr-4">
        {/* Github */}
        <a
          href="https://github.com/JjuliSanz"
          target="_blank"
          rel="noopener noreferrer"
          className="ease-out duration-300 hover:scale-[1.2]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </a>
        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/julian-sanz-ba4270240/"
          target="_blank"
          rel="noopener noreferrer"
          className="ease-out duration-300 hover:scale-[1.2]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
          </svg>
        </a>
        {/* Portfolio */}
        <a
          href="https://my-portfoli-website.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="ease-out duration-300 hover:scale-[1.2]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-laptop"
            viewBox="0 0 16 16"
          >
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
          </svg>
        </a>
        {/* Figma */}
        <a
          href="https://www.figma.com/file/lLQKs6llP51NfNixTJdNSw/Buscamina?type=design&mode=design&t=vpFsjpZiYHhyjjJb-1"
          target="_blank"
          rel="noopener noreferrer"
          className="ease-out duration-300 hover:scale-[1.2]"
        >
          <svg
            fill="#000000"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
