import { useReducer } from "react";
import { Context } from "./Context";
import { itemReducer } from "./Reducer";
import axios from "axios";

const INITIAL_STATE = {
    items: [],
    allItems: [],
    details: {},
    cart: [],
    user: false,
    userFilled: {},
    userData: {}
    
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
    const getAllItems = async () => {
        try {
            const resp = await axios.get("http://localhost:9000/api/items");
            return dispatch ({
                type: "GET_ALL_ITEMS",
                payload: resp.data
            })
        }
        catch(err) {
            console.log(err);
        }   
    }

    const filterPriceAsc = async (category) => {
        try{
            const resp = category? await axios.get(`http://localhost:9000/api/itemsp?category=${category}&sort=price,asc`) : await axios.get("http://localhost:9000/api/itemsp?sort=price") 
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
        const resp = category? await axios.get(`http://localhost:9000/api/itemsp?category=${category}&sort=price,desc`) : await axios.get("http://localhost:9000/api/itemsp?sort=price,desc") 

        return dispatch ({
            type: "FILTER_PRICE_DESC",
            payload: resp.data.items
        })
} catch(err) {
    console.log(err);
}
} 

const filterByCategory = async (TYPE) => {
    try{
        const resp = await axios.get(`http://localhost:9000/api/itemsp?category=${TYPE}`)

        return dispatch ({
            type: "FILTER_BY_CATEGORY",
            payload: resp.data.items
        })
} catch(err) {
    console.log(err);
}
} 

const searchFunction = async (TYPE) => {

    try{
        const resp = await axios.get(`http://localhost:9000/api/itemsp?search=${TYPE}`)

        return dispatch ({
            type: "FILTER_BY_CATEGORY",
            payload: resp.data.items
        })
} catch(err) {
    console.log(err);
}
} 

const getItemDetails = async (id) => {
    try{
        const resp = await axios.get(`http://localhost:9000/api/item/${id}`)

        return dispatch ({
            type: "GET_ITEM_DETAILS",
            payload: resp.data
        })
} catch(err) {
    console.log(err);
}
} 

const addItemToCart = (item) => {
console.log(item, "ITEMMMMMMM")
    try{
        return dispatch ({
            type: "ADD_ITEM_TO_CART",
            payload: item
        })
} catch(err) {
    console.log(err);
}
} 

const userOut = () => {
    console.log(INITIAL_STATE, "ESTADO INICIAAAAAAAAAAL")
    try{
        return dispatch ({
            type: "USER_OUT",
            payload: INITIAL_STATE
        })
} catch(err) {
    console.log(err);
}
} 

const verifyUser = (data) => {
    const verified = data.data.verificated
    try{
        return dispatch ({
            type: "VERIFY_USER",
            payload: verified
        })
} catch(err) {
    console.log(err);
}
} 

const fillUser = (data) => {
    const userToFill = data.data.user

    try{
        return dispatch ({
            type: "FILL_USER",
            payload: userToFill
        })
} catch(err) {
    console.log(err);
}
} 

const userData = async (id) => {

    try{
        const resp = await axios.get(`http://localhost:9000/auth/userfind/${id}`)
        return dispatch ({
            type: "USER_DATA",
            payload: resp.data
        })
} catch(err) {
    console.log(err);
}
} 

const deleteItemOfCart = (id) => {

    try {
        return dispatch({
            type: "DELETE_ITEM_OF_CART",
            payload: id
        })
    } catch(err) {
        console.log(err)
    }
}

const sumItemOfCart = (id) => {
    console.log(id, "data del PROVIDER")
    try {
        return dispatch({
            type: "SUM_ITEM_OF_CART",
            payload: id
        })
    } catch(err) {
        console.log(err)
    }
}

const restItemOfCart = (id) => {

    try {
        return dispatch({
            type: "REST_ITEM_OF_CART",
            payload: id
        })
    } catch(err) {
        console.log(err)
    }
}

return (
    <Context.Provider value={{fillUser, userOut, sumItemOfCart, restItemOfCart, getItems, userData, state, filterPriceAsc, filterPriceDesc, filterByCategory, searchFunction, getItemDetails, addItemToCart, getAllItems, deleteItemOfCart, verifyUser}}>
        {children}
    </Context.Provider>
)


}
