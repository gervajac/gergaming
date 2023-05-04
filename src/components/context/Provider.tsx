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
    userData: {},
    searchWord: "",
    isLoading: false,
    purchasesHistory: []
    
}

interface props {
    children: JSX.Element | JSX.Element[];
}

export const Provider = ({children}: props) => {
    const [state, dispatch] = useReducer(itemReducer, INITIAL_STATE);

    const getItems = async () => {
        try {
            const resp = await axios.get("https://bronze-bee-wrap.cyclic.app/api/items");
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
            const resp = await axios.get("https://bronze-bee-wrap.cyclic.app/api/items");
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
        const searchedWord = state.searchWord
        try{
            const resp = category ? await axios.get(`https://bronze-bee-wrap.cyclic.app/api/itemsp?category=${category}&sort=price,asc`) : await axios.get(`https://bronze-bee-wrap.cyclic.app/api/itemsp?search=${searchedWord}&sort=price,asc`)

            return dispatch ({
                type: "FILTER_PRICE_ASC",
                payload: resp.data.items
            })
    } catch(err) {
        console.log(err);
    }
} 

const filterPriceDesc = async (category) => {

    const searchedWord = state.searchWord
    try{
        const resp = category ? await axios.get(`https://bronze-bee-wrap.cyclic.app/api/itemsp?category=${category}&sort=price,desc`) : await axios.get(`https://bronze-bee-wrap.cyclic.app/api/itemsp?search=${searchedWord}&sort=price,desc`)
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
        const resp = await axios.get(`https://bronze-bee-wrap.cyclic.app/api/itemsp?category=${TYPE}`)

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
        const resp = await axios.get(`https://bronze-bee-wrap.cyclic.app/api/itemsp?search=${TYPE}`)

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
        const resp = await axios.get(`https://bronze-bee-wrap.cyclic.app/api/item/${id}`)

        return dispatch ({
            type: "GET_ITEM_DETAILS",
            payload: resp.data
        })
} catch(err) {
    console.log(err);
}
} 

const getPurchasesHistory = async (id) => {
    try{
        const resp = await axios.get(`https://bronze-bee-wrap.cyclic.app/checkout/paymentsfind/${id}`)

        return dispatch ({
            type: "GET_PURCHASES_HISTORY",
            payload: resp.data
        })
} catch(err) {
    console.log(err);
}
} 

const addItemToCart = (item) => {

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

    try{
        return dispatch ({
            type: "USER_OUT",
            payload: INITIAL_STATE
        })
} catch(err) {
    console.log(err);
}
} 

const clearCart = () => {

    try{
        return dispatch ({
            type: "CLEAR_CART",
            payload: INITIAL_STATE.cart
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

const loading = () => {
    
try{
    return dispatch ({
        type: "LOADING",
        payload: true
    })
} catch(err) {
console.log(err);
}
} 

const userData = async (id) => {

    try{
        const resp = await axios.get(`https://bronze-bee-wrap.cyclic.app/auth/userfind/${id}`)
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

const searchWordFunction = (string) => {

    try {
        return dispatch({
            type: "SEARCH_WORD",
            payload: string
        })
    } catch(err) {
        console.log(err)
    }
}

return (
    <Context.Provider value={{fillUser, clearCart, userOut, getPurchasesHistory, sumItemOfCart, loading, restItemOfCart, searchWordFunction, getItems, userData, state, filterPriceAsc, filterPriceDesc, filterByCategory, searchFunction, getItemDetails, addItemToCart, getAllItems, deleteItemOfCart, verifyUser}}>
        {children}
    </Context.Provider>
)


}
