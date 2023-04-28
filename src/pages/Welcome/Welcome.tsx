import React, { useContext } from "react";
import { NavBar } from "../../components/NavBar";
import { SearchBar } from "../../components/SearchBar";
import { Carrousel } from "../../components/Carrousel";
import { Footer } from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../components/context/Context";

import img from "../../assets/GERTECHbann.jpg";
export interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  const navigate = useNavigate();
  const { state, filterByCategory } = useContext(Context);

  console.log(state, "ESTADOOOOOOOOO");

  const handleRediretFilter = (e) => {
    e.preventDefault();
    const src = e.nativeEvent.target.currentSrc
    console.log(src)
    if(src === "https://cdn.shopify.com/s/files/1/0482/6126/7617/articles/M314_1080x.jpg?v=1633105598")
    filterByCategory("perifericos");
    navigate("/home");
    if(src === "https://www.clarin.com/img/2022/06/25/nvidia-geforce-rtx-una-de___CH2QlPmXe_2000x1500__1.jpg")
    filterByCategory("gpu");
    navigate("/home");
    if(src === "https://www.muycomputerpro.com/wp-content/uploads/2018/12/Procesadores_Intel.jpg")
    filterByCategory("cpu");
    navigate("/home");
    if(src === "https://images.anandtech.com/doci/17408/MSI%20AM5%20Motherboards%203_575px.jpg")
    filterByCategory("motherboard");
    navigate("/home");
    if(src === "https://redragon.es/content/uploads/2021/06/Megamenu-Gabinetes-1500x1182-1.jpg")
    filterByCategory("perifericos");
    navigate("/home");
    if(src === "https://tynmagazine.com/wp-content/uploads/sites/3/2022/01/ROG-Zephyrus-Duo-16-930x651.jpg")
    filterByCategory("Notebook");
    navigate("/home");
    
  };

  return (
    <div className="bg-gray-300">
      <SearchBar />
      <div>
        <img
          className="flex justify-center w-screen"
          src={img}
        ></img>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <button
                value="perifericos"
                onClick={(e) => handleRediretFilter(e)}
                className="overflow-hidden rounded-lg shadow-lg min-w-full"
              >
                <div>
                  <img
                    alt="Placeholder"
                    className="block max-h-[250px] min-h-[200px] w-full"
                    src="https://cdn.shopify.com/s/files/1/0482/6126/7617/articles/M314_1080x.jpg?v=1633105598"
                  />
                  <div className="flex items-center justify-between leading-tight p-2 md:p-4 bg-black">
                    <h1 className="text-lg">
                      <a className="no-underline hover:underline text-white">
                        Perifericos
                      </a>
                    </h1>
                  </div>
                </div>
              </button>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <button
                onClick={(e) => handleRediretFilter(e)}
                className="overflow-hidden rounded-lg min-w-full shadow-lg"
              >
                <div>
                  <img
                    alt="Placeholder"
                    className="block max-h-[250px] min-h-[200px] w-full"
                    src="https://www.clarin.com/img/2022/06/25/nvidia-geforce-rtx-una-de___CH2QlPmXe_2000x1500__1.jpg"
                  />
                </div>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-black">
                  <h1 className="text-lg">
                    <div className="no-underline hover:underline text-white">
                      Placas de Video
                    </div>
                  </h1>
                </header>
              </button>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <button
                onClick={(e) => handleRediretFilter(e)}
                className="overflow-hidden rounded-lg shadow-lg min-w-full"
              >
                <div>
                  <img
                    alt="Placeholder"
                    className="block max-h-[250px] min-h-[200px] w-full"
                    src="https://www.muycomputerpro.com/wp-content/uploads/2018/12/Procesadores_Intel.jpg"
                  />
                </div>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-black">
                  <h1 className="text-lg">
                    <div className="no-underline hover:underline text-white">
                      Procesadores
                    </div>
                  </h1>
                </header>
              </button>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <button
                onClick={(e) => handleRediretFilter(e)}
                className="overflow-hidden rounded-lg shadow-lg min-w-full"
              >
                <div>
                  <img
                    alt="Placeholder"
                    className="block max-h-[250px] min-h-[200px] w-full"
                    src="https://images.anandtech.com/doci/17408/MSI%20AM5%20Motherboards%203_575px.jpg"
                  />
                </div>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-black">
                  <h1 className="text-lg">
                    <div className="no-underline hover:underline text-white">
                      Motherboards
                    </div>
                  </h1>
                </header>
              </button>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <button
                onClick={(e) => handleRediretFilter(e)}
                className="overflow-hidden rounded-lg shadow-lg min-w-full"
              >
                <div>
                  <img
                    alt="Placeholder"
                    className="block max-h-[250px] min-h-[200px] w-full"
                    src="https://redragon.es/content/uploads/2021/06/Megamenu-Gabinetes-1500x1182-1.jpg"
                  />
                </div>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-black">
                  <h1 className="text-lg">
                    <div className="no-underline hover:underline text-white">
                      Gabinetes
                    </div>
                  </h1>
                </header>
              </button>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <button
                onClick={(e) => handleRediretFilter(e)}
                className="overflow-hidden rounded-lg shadow-lg min-w-full"
              >
                <div>
                  <img
                    alt="Placeholder"
                    className="block max-h-[250px] min-h-[200px] w-full"
                    src="https://tynmagazine.com/wp-content/uploads/sites/3/2022/01/ROG-Zephyrus-Duo-16-930x651.jpg"
                  />
                </div>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-black">
                  <h1 className="text-lg">
                    <div className="no-underline hover:underline text-white">
                      Notebooks
                    </div>
                  </h1>
                </header>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
