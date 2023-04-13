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
            const resp = await axios.get("http://localhost:9000/api/items");
            return dispatch ({
                type: "GET_ITEMS",
                payload: resp.data
            })
        }
        catch(err) {
            console.log(err);
        }   
    }

    const filterPriceAsc = async (category) => {
        console.log(category, "CATEGORIA QUE LE LLEGA AL ACTION")
        try{
            const resp = category? await axios.get(`http://localhost:9000/api/itemsp?category=${category}&sort=price,asc`)  : await axios.get("http://localhost:9000/api/itemsp?sort=price") 
            console.log(resp, "RESPUESTA")
            return dispatch ({
                type: "FILTER_PRICE_ASC",
                payload: resp.data.items
            })
    } catch(err) {
        console.log(err);
    }
} 

const filterPriceDesc = async (category) => {
    try{
        const resp = category? await axios.get(`http://localhost:9000/api/itemsp?category=${category}&sort=price,desc`)  : await axios.get("http://localhost:9000/api/itemsp?sort=price,desc") 
        return dispatch ({
            type: "FILTER_PRICE_DESC",
            payload: resp.data.items
        })
} catch(err) {
    console.log(err);
}
} 

const filterByCategory = async (TYPE) => {
    console.log(TYPE, "typeeee")
    try{
        const resp = await axios.get(`http://localhost:9000/api/itemsp?category=${TYPE}`)
        console.log(resp, "fetchresp")
        return dispatch ({
            type: "FILTER_BY_CATEGORY",
            payload: resp.data.items
        })
} catch(err) {
    console.log(err);
}
} 

const searchFunction = async (TYPE) => {
    console.log(TYPE, "typeeee")
    try{
        const resp = await axios.get(`http://localhost:9000/api/itemsp?search=${TYPE}`)
        console.log(resp, "fetchresp")
        return dispatch ({
            type: "FILTER_BY_CATEGORY",
            payload: resp.data.items
        })
} catch(err) {
    console.log(err);
}
} 

return (
    <Context.Provider value={{getItems, state, filterPriceAsc, filterPriceDesc, filterByCategory, searchFunction}}>
        {children}
    </Context.Provider>
)


}
