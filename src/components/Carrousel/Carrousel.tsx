import React from "react";
import kingston from "../../assets/kingstonlogo.png"
import logitech from "../../assets/logitechlogo.png"
import redragon from "../../assets/redragonlogo.png"
import zowie from "../../assets/zowielogo.png"
import asus from "../../assets/asuslogo.png"
export interface CarrouselProps {}

const Carrousel: React.FC<CarrouselProps> = () => {

  let defaultTransform = 0;
function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider!.scrollWidth / 1.7) defaultTransform = 0;
    slider!.style.transform = "translateX(" + defaultTransform + "px)";
}



function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider!.style.transform = "translateX(" + defaultTransform + "px)";
}



  return (
    <div className="flex items-center justify-center w-full max-h-[330px] py-24 sm:py-8 px-4 border-4 border-gray-900 bg-gray-300">
      <div className="w-full relative flex items-center justify-center">
        <button
          onClick={() => goPrev()}
          aria-label="slide backward"
          className="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
          id="prev"
        >
          <svg
            className="dark:text-purple-900"
            width="26"
            height="40"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
          <div
            id="slider"
            className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
          >
            <div className="flex flex-shrink-0 relative max-w-[150px] sm:w-auto">
              <img
                src={kingston}
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex flex-shrink-0 relative max-w-[150px] sm:w-auto">
              <img
                src={logitech}
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex flex-shrink-0 relative max-w-[150px] sm:w-auto">
              <img
                src={asus}
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex flex-shrink-0 relative max-w-[150px] sm:w-auto">
              <img
                src={redragon}
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex flex-shrink-0 relative max-w-[150px] sm:w-auto">
              <img
                src={zowie}
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex flex-shrink-0 relative max-w-[150px] sm:w-auto">
              <img
                src={kingston}
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex flex-shrink-0 relative max-w-[150px] sm:w-auto">
              <img
                src={kingston}
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex flex-shrink-0 relative max-w-[150px] sm:w-auto">
              <img
                src={kingston}
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex flex-shrink-0 relative max-w-[150px] sm:w-auto">
              <img
                src={kingston}
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex flex-shrink-0 relative max-w-[150px] sm:w-auto">
              <img
                src={kingston}
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex flex-shrink-0 relative max-w-[150px] sm:w-auto">
              <img
                src={kingston}
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="flex flex-shrink-0 relative max-w-[150px] sm:w-auto">
              <img
                src={kingston}
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => goNext()}
          aria-label="slide forward"
          className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          id="next"
        >
          <svg
            className="dark:text-purple-900"
            width="26"
            height="40"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
