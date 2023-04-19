import { createContext } from "react";

export type ContextProps = {
    state: any,
    getItems: any,
    filterPriceAsc: any,
    filterPriceDesc: any,
    filterByCategory: any,
    searchFunction: any,
    getItemDetails: any,
    addItemToCart: any,
    getAllItems: any,
    deleteItemOfCart: any,
    restItemOfCart: any,
    sumItemOfCart: any
}

export const Context = createContext<ContextProps>({} as ContextProps);