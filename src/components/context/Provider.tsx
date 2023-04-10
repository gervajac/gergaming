import { useReducer } from "react";
import { Context } from "./Context";
import { itemReducer } from "./Reducer";
import axios from "axios";

const INITIAL_STATE = {
    items: []
}

interface props {
    children: JSX.Element | JSX.Element[];
}

export const Provider = ({children}: props) => {
    const [state, dispatch] = useReducer(itemReducer, INITIAL_STATE);

    const getItems = async () => {
        try {
            const resp = await axios.get("http://localhost:9000/api/itemsp");
            return dispatch ({
                type: "GET_ITEMS",
                payload: resp.data.items
            })
        }
        catch(err) {
            console.log(err);
        }   
    }

return (
    <Context.Provider value={{getItems, state}}>
        {children}
    </Context.Provider>
)

}
