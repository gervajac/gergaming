import React from "react";
import mother from "../../assets/cpu.svg";
import gpu from "../../assets/gpu.svg";
import perif from "../../assets/perif.svg";
import fuente from "../../assets/fuente.svg";
import motherb from "../../assets/mother.svg";
import ram from "../../assets/ramm.svg";
import asc from "../../assets/sorta.svg";
import desc from "../../assets/sortd.svg";
import notebook from "../../assets/laptop.svg";
import amd from "../../assets/amd.svg";
import intell from "../../assets/intell.svg";
import teclado from "../../assets/teclado.svg";
import perifericos from "../../assets/perifericos.svg";
import auricular from "../../assets/auricular.svg";
import gabinete from "../../assets/gabinete.svg";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const { filterPriceAsc, filterPriceDesc, filterByCategory, loading } =
    useContext(Context);
  const [category, setCategory] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const [isOpen4, setIsOpen4] = useState(false);

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };

  // useEffect(() => {
  //   filterPriceAsc()
  // }, [])

  const handleSortAsc = () => {
    loading()
    filterPriceAsc(category);
  };

  const handleSortDesc = () => {
    loading()
    filterPriceDesc(category);
  };

  const handleFilterCategory = (e) => {
    e.preventDefault();
    const index = e.nativeEvent.target.innerHTML;
    loading()
    if (index === "- Amd Ryzen")
      filterByCategory("cpuamd") && setCategory("cpuamd");
    if (index === "- Intel")
      filterByCategory("cpuintel") && setCategory("cpuintel");
    if (index === "Placas de Video")
      filterByCategory("gpu") && setCategory("gpu");
    if (index === "Motherboards")
      filterByCategory("mother") && setCategory("mother");
    if (index === "Memorias RAM") filterByCategory("ram") && setCategory("ram");
    if (index === "- Teclados")
      filterByCategory("teclado") && setCategory("teclado");
    if (index === "- Mouses") filterByCategory("mouse") && setCategory("mouse");
    if (index === "- Auriculares")
      filterByCategory("auriculares") && setCategory("auriculares");
    if (index === "Notebooks")
      filterByCategory("Notebook") && setCategory("Notebook");
    if (index === "Fuentes")
      filterByCategory("fuente") && setCategory("fuente");
      if (index === "Gabinetes")
      filterByCategory("Gabinete") && setCategory("Gabinete");
  };

  return (
    <div
      id="Main"
      className="hidden md:flex max-h-screen shadow-md shadow-gray-500 min-w-[300px] ml-4 rounded justify-start items-start bg-gray-900 flex-col w-auto"
    >
      <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full bg-gray-900 border-b space-y-3 pb-5 ">
        <button className="flex justify-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
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
          onClick={() => toggleDropdown()}
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
        {isOpen ? (
          <div
            id="menu1"
            className="justify-start flex-col w-full md:w-auto items-start pb-1 "
          >
            <div>
              <button 
              onClick={() => toggleDropdown4()}
              className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
                <img src={mother}></img>
                <p className="text-base leading-4  ">Procesadores</p>
                <svg
                  id="icon4"
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
              { isOpen4 ? (<div
                id="menu4"
                className="justify-start flex-col w-full md:w-auto items-start pb-1 "
              >
                <button
                  value="amd"
                  onClick={(p) => handleFilterCategory(p)}
                  className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                >
                  <img src={amd}></img>
                  <p className="text-base leading-4  ">- Amd Ryzen</p>
                </button>
                <button
                  value="intel"
                  onClick={(p) => handleFilterCategory(p)}
                  className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                >
                  <img src={intell}></img>
                  <p className="text-base leading-4  ">- Intel</p>
                </button>
              </div>) : null}
            </div>
            <button
              onClick={(p) => handleFilterCategory(p)}
              className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
            >
              <img src={gpu}></img>
              <p className="text-base leading-4  ">Placas de Video</p>
            </button>
            <button
              onClick={(p) => handleFilterCategory(p)}
              className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
            >
              <img src={motherb}></img>
              <p className="text-base leading-4  ">Motherboards</p>
            </button>
            <div>
              <button
                onClick={() => toggleDropdown3()}
                className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
              >
                <img src={perifericos}></img>
                <p className="text-base leading-4  ">Periféricos</p>
                <svg
                  id="icon3"
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
              {isOpen3 ? (
                <div
                  id="menu3"
                  className="justify-start flex-col w-full md:w-auto items-start pb-1 "
                >
                  <button
                    value="teclado"
                    onClick={(p) => handleFilterCategory(p)}
                    className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                  >
                    <img src={teclado}></img>
                    <p className="text-base leading-4  ">- Teclados</p>
                  </button>
                  <button
                    value="auricular"
                    onClick={(p) => handleFilterCategory(p)}
                    className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                  >
                    <img src={auricular}></img>
                    <p className="text-base leading-4  ">- Auriculares</p>
                  </button>
                  <button
                    value="mouse"
                    onClick={(p) => handleFilterCategory(p)}
                    className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                  >
                    <img src={perif}></img>
                    <p className="text-base leading-4  ">- Mouses</p>
                  </button>
                </div>
              ) : null}
            </div>
            <button
              onClick={(p) => handleFilterCategory(p)}
              className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
            >
              <img src={fuente}></img>
              <p className="text-base leading-4  ">Fuentes</p>
            </button>
            <button
              onClick={(p) => handleFilterCategory(p)}
              className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
            >
              <img src={ram}></img>
              <p className="text-base leading-4  ">Memorias RAM</p>
            </button>
            <button
              onClick={(p) => handleFilterCategory(p)}
              className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
            >
              <img src={notebook}></img>
              <p className="text-base leading-4  ">Notebooks</p>
            </button>
            <button
              onClick={(p) => handleFilterCategory(p)}
              className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
            >
              <img src={gabinete}></img>
              <p className="text-base leading-4  ">Gabinetes</p>
            </button>
          </div>
        ) : null}
      </div>
      <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full bg-gray-900 border-b space-y-3 pb-5 ">
        <button className="flex justify-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
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
          <p className="text-base leading-4 ">ORDENA POR</p>
        </button>
      </div>
      <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
        <button
          onClick={() => toggleDropdown2()}
          className="focus:outline-none focus:text-indigo-400 text-left  text-white flex justify-between items-center w-full py-5 space-x-14  "
        >
          <p className="text-sm leading-5  uppercase">Precio</p>
          <svg
            id="icon2"
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
        {isOpen2 ? (
          <div
            id="menu2"
            className="justify-start  flex-col w-full md:w-auto items-start pb-1 "
          >
            <button
              onClick={() => handleSortAsc()}
              value="asc"
              className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
            >
              <img src={desc}></img>
              <p className="text-base leading-4  ">Ascendente</p>
            </button>
            <button
              onClick={() => handleSortDesc()}
              value="desc"
              className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
            >
              <img src={asc}></img>
              <p className="text-base leading-4  ">Descendente</p>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SideBar;
