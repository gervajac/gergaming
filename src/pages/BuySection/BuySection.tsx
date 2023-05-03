import React, { useContext, useEffect } from "react";
import { Context } from "../../components/context/Context";

export type BuySectionProps = {};

const BuySection: React.FC<BuySectionProps> = () => {
  const { state, getPurchasesHistory } = useContext(Context);

  useEffect(() => {
    getPurchasesHistory(state.userFilled._id);
  }, []);

  const cartToMap = state.purchasesHistory;

  if (state.purchasesHistory.length >= 1) {
    return (
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Historial de compras
          </h1>
        </div>
        {cartToMap
          ? cartToMap.map((e) => {
              return (
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                  <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                      <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                        Detalle de compra
                      </p>
                      {e.product.map((i) => {
                        return (
                          <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                            <div className="pb-4 md:pb-8 w-full md:w-40">
                              <img
                                className="w-full hidden md:block"
                                src={i.image}
                                alt="dress"
                              />
                              <img
                                className="w-full md:hidden"
                                src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                                alt="dress"
                              />
                            </div>
                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                              <div className="w-full flex flex-col justify-start items-start space-y-8">
                                <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                                  {i.product}
                                </h3>
                                <div className="flex justify-start items-start flex-col space-y-2">
                                  <p className="text-sm leading-none text-gray-800">
                                    <span className="text-gray-300">
                                      Marca:{" "}
                                    </span>
                                    {i.brand}
                                  </p>
                                  <p className="text-sm leading-none text-gray-800">
                                    <span className="text-gray-300">
                                      Categoria:{" "}
                                    </span>
                                    {i.category}
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between space-x-8 items-start w-full">
                                <p className="text-base xl:text-lg leading-6"></p>
                                <p className="text-base xl:text-lg leading-6 text-gray-800">
                                  Cantidad: {i.quantity}
                                </p>
                                <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                                  ${i.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                          <h3 className="text-xl font-semibold leading-5 text-gray-800">
                            Summary
                          </h3>
                          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                            <div className="flex justify-between  w-full">
                              <p className="text-base leading-4 text-gray-800">
                                Subtotal
                              </p>
                              <p className="text-base leading-4 text-gray-600">
                                ${e.amount}
                              </p>
                            </div>
                            <div className="flex justify-between items-center w-full">
                              <p className="text-base leading-4 text-gray-800">
                                Envio
                              </p>
                              <p className="text-base leading-4 text-gray-600">
                                $1750.00
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center w-full">
                            <p className="text-base font-semibold leading-4 text-gray-800">
                              Total
                            </p>
                            <p className="text-base font-semibold leading-4 text-gray-600">
                              ${e.amount + 1750}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  } else {
    return (
      <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-center items-start md:items-center min-h-screen md:space-x-6 xl:space-x-8 w-full bg-gray-300">

<div className="justify-between mb-6 rounded-lg bg-gray-700 p-6 shadow-md sm:flex sm:justify-start">
                <h1 className="mb-10 text-center text-2xl font-bold text-white">
                  No has realizado ninguna compra.
                </h1>
              </div>
      </div>
    );
  }
};

export default BuySection;
