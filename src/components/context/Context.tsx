import { createContext } from "react";

export type ContextProps = {
    state: any,
    getItems: any,
    filterPriceAsc: any,
    filterPriceDesc: any,
    filterByCategory: any,
    searchFunction: any,
    getItemDetails: any,
    addItemToCart: any
}

export const Context = createContext<ContextProps>({} as ContextProps);