import React from "react";
import mother from "../../assets/cpu.svg";
import gpu from "../../assets/gpu.svg";
import perif from "../../assets/perif.svg";
import fuente from "../../assets/fuente.svg";
import motherb from "../../assets/mother.svg";
import ram from "../../assets/ramm.svg";
import asc from "../../assets/sorta.svg";
import desc from "../../assets/sortd.svg";

export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const icon1 = document.getElementById("icon1");
  const menu1 = document.getElementById("menu1");

  // const showMenu1 = (flag) => {
  //   if (flag) {
  //     icon1.classList.toggle("rotate-180");
  //     menu1.classList.toggle("hidden");
  //   }
  // };

  let Main = document.getElementById("Main");
  let open = document.getElementById("open");
  let close = document.getElementById("close");

  // const showNav = (flag) => {
  //   if (flag) {
  //     Main.classList.toggle("-translate-x-full");
  //     Main.classList.toggle("translate-x-0");
  //     open.classList.toggle("hidden");
  //     close.classList.toggle("hidden");
  //   }
  // };

  return (
    <>
      <div className="bg-gray-900 xl:hidden flex justify-between p-6 items-center"></div>
      <div
        id="Main"
        className="h-screen transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-64 bg-gray-900 flex-col"
      >
        <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full bg-gray-900 border-b space-y-3 pb-5 ">
          <button className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
            <svg
              className="fill-stroke "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-base leading-4 ">FILTRA POR</p>
          </button>

        </div>
        <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
          <button
            // onClick={() => showMenu1(false)}
            className="focus:outline-none focus:text-indigo-400 text-left  text-white flex justify-between items-center w-full py-5 space-x-14  "
          >
            <p className="text-sm leading-5  uppercase">Categorias</p>
            <svg
              id="icon1"
              className="transform"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 15L12 9L6 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            id="menu1"
            className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 "
          >
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              <img src={mother}></img>
              <p className="text-base leading-4  ">Procesadores</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              <img src={gpu}></img>
              <p className="text-base leading-4  ">Placas de Video</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
              <img src={motherb}></img>
              <p className="text-base leading-4  ">Motherboards</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              <img src={perif}></img>
              <p className="text-base leading-4  ">Periféricos</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              <img src={fuente}></img>
              <p className="text-base leading-4  ">Fuentes</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              <img src={ram}></img>
              <p className="text-base leading-4  ">Memorias RAM</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
          <button
            // onClick={() => showMenu1(false)}
            className="focus:outline-none focus:text-indigo-400 text-left  text-white flex justify-between items-center w-full py-5 space-x-14  "
          >
            <p className="text-sm leading-5  uppercase">Precio</p>
            <svg
              id="icon1"
              className="transform"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 15L12 9L6 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            id="menu1"
            className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 "
          >
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              <img src={desc}></img>
              <p className="text-base leading-4  ">Ascendente</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              <img src={asc}></img>
              <p className="text-base leading-4  ">Descendente</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
