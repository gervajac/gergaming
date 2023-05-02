import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import spinner from "../../assets/spinner.svg"
import { SideBar } from "../SideBar";
import { useContext } from "react";
import { NotFoundCard } from "../NotFoundCard";
import { Context } from "../context/Context";

export interface CardSectionProps {}

const CardSection: React.FC<CardSectionProps> = () => {
  const { getItems, state, getAllItems, loading } = useContext(Context);

  useEffect(() => {
    if (state.items.length === 0) {
      loading()
      getItems();
    }
  }, []);


  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1000); // Retraso de 3 segundos

    return () => clearTimeout(timer);
  }, []);

  const isLoading = state.isLoading
  console.log(isLoading)
  console.log(state.isLoading)

  return (
    <div className="flex min-h-screen overflow-hidden rounded-lg shadow-lg bg-gray-300">
      <div className="hidden md:flex mx-1 flex-wrap justify-center max-h-screen min-w-[250px]">
        <img src="https://www.hardgamers.com.ar/public/images/common/banner-vertical-2.png" alt=""></img>
      </div>
      <SideBar />
      <div className="flex mx-5 flex-col justify-start">
        {state.items.length >= 1 ? (state.items.map((e: any) => {
          return (
            <Card
              key={e._id}
              id={e._id}
              name={e.name}
              category={e.category}
              price={e.price}
              brand={e.brand}
              image={e.image}
            />
          );
        })) : (showComponent ? <NotFoundCard/> : <div className="flex mx-5 flex-wrap justify-center"><img src={spinner}></img></div>)}
      </div>
      <div className="hidden md:flex mx-1 flex-wrap max-h-screen justify-center min-w-[250px] mr-0">
      <img src="https://www.hardgamers.com.ar/public/images/common/banner-vertical-5.png" alt=""></img>
      </div>
    </div>
  )} 


export default CardSection;
