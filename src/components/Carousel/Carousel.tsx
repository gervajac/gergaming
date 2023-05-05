import { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
	const {state, filterByCategory} = useContext(Context)
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleRedirect = () => {
    filterByCategory("cpuintel");
    navigate("/home");
    window.scrollTo(0, 0)
  }


  return (
    <div className="relative top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <button
        className="rounded-full bg-gray-800 text-white p-2 absolute top-1/2 transform -translate-y-1/2 left-2"
        onClick={handlePrevClick}
      >
        {"<"}
      </button>
      <button
        className="rounded-full bg-gray-800 text-white p-2 absolute top-1/2 transform -translate-y-1/2 right-2"
        onClick={handleNextClick}
      >
        {">"}
      </button>
      {activeIndex === 1 ? 
	  (<button
		onClick={() => {handleRedirect()}} 
	  ><img 
        src={images[activeIndex]}
        alt={`Image ${activeIndex}`}
        className="min-w-screen max-h-[400px] object-contain"
      /></button>) : (<img 
        src={images[activeIndex]}
        alt={`Image ${activeIndex}`}
        className="min-w-screen max-h-[400px] object-contain"
      />)}
    </div>
  );
};

export default ImageCarousel;