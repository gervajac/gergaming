import React, { useEffect } from "react";
import Card from "../Card/Card";
import { SideBar } from "../SideBar";
import { useContext } from "react";
import { Context } from "../context/Context";

export interface CardSectionProps {}

const CardSection: React.FC<CardSectionProps> = () => {
  useEffect(() => {
    getItems();
	getAllItems();
  }, []);

  const { getItems, state, getAllItems } = useContext(Context);

  console.log(state, "ESTADO");

  return (
    <>
      <div className="flex  max-h-max mt-1 bg-gray-300 px-12">
        <SideBar />
        <div className="flex justify-between flex-wrap">
          {state.items.map((e: any) => {
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
          })}
        </div>
      </div>
    </>
  );
};

export default CardSection;
