import React, { useEffect} from "react";
import Card from "../Card/Card";
import { SideBar } from "../SideBar";
import { useContext } from "react";
import { Context } from "../context/Context";

export interface CardSectionProps {}

const CardSection: React.FC<CardSectionProps> = () => {

  const { getItems, state, getAllItems } = useContext(Context);

  useEffect(() => {
  if(state.items.length === 0) {
      getItems()
  }
}, [])

  return (
      <div className="flex min-h-screen overflow-hidden rounded-lg shadow-lg bg-gray-300 px-12">
        <SideBar />
        <div className="flex mx-20 flex-wrap justify-center">
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
  );
};

export default CardSection;
