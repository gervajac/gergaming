import { createContext } from "react";

export type ContextProps = {
    state: any,
    getItems: any
}

export const Context = createContext<ContextProps>({} as ContextProps);