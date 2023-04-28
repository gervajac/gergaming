import { Item } from "../../interfaces/interfaces";
import { UserData } from "../../interfaces/interfaces";
import { User } from "../../interfaces/interfaces";

type ItemAction = 
                  {type: "GET_ITEMS", payload: Item}
                 | {type: "FILTER_PRICE_ASC", payload: Item}
                 | {type: "FILTER_PRICE_DESC", payload: Item}
                 | {type: "FILTER_BY_CATEGORY", payload: Item}
                 | {type: "SEARCH", payload: Item}
                 | {type: "GET_ITEM_DETAILS", payload: Item}
                 | {type: "ADD_ITEM_TO_CART", payload: Item}
                 | {type: "GET_ALL_ITEMS", payload: Item}
                 | {type: "DELETE_ITEM_OF_CART", payload: Item}
                 | {type: "REST_ITEM_OF_CART", payload: Item}
                 | {type: "SUM_ITEM_OF_CART", payload: Item}
                 | {type: "VERIFY_USER", payload: Item}
                 | {type: "USER_DATA", payload: UserData}
                 | {type: "FILL_USER", payload: UserData}
                 | {type: "USER_OUT", payload: any}
                 | {type: "SEARCH_WORD", payload: string}


export const itemReducer = (state: any, action: ItemAction) => {
    const {type, payload} = action
    switch(type) {
            
        case "GET_ITEMS":
            return {
                ...state,
                items: payload
            }
            case "GET_ALL_ITEMS":
                return {
                    ...state,
                    allItems: payload
                }    
        case "FILTER_PRICE_ASC": 
            return{
                ...state,
                items: payload
            }
        
        case "FILTER_PRICE_DESC": 
            return{
                ...state,
                items: payload
            }
            case "FILTER_BY_CATEGORY": 
            return{
                ...state,
                items: payload
            }
            case "SEARCH": 
            return{
                ...state,
                items: payload
            }
            case "SEARCH_WORD": 
            return{
                ...state,
                searchWord: payload
            }
            case "USER_OUT": 
            return{
                ...payload,
                
            }
            case "VERIFY_USER": 
            console.log(payload, "payloassss")
            return{
                ...state,
                userData: payload
            }
            case "FILL_USER": 

            return{
                ...state,
                userFilled: payload
            }
            case "USER_DATA": 
      
            return{
                ...state,
                userData: payload
            }
            case "GET_ITEM_DETAILS": 
            return{
                ...state,
                details: payload
            }
            case "ADD_ITEM_TO_CART": 
            console.log(state)
            const newItem = state.items.find(e => e._id === payload)
            const itemInCart = state.cart.find(e => e._id === payload)
            console.log(newItem, "NEW ITEM")
            console.log(itemInCart, "ADDEDITEM")
            
            if(itemInCart) {
             
                state.cart = state.cart.map((item) =>
                 item._id === newItem._id 
                 ? {...item, quantity: item.quantity + 1/2} 
                 : item
                );
            } else {
                state.cart = [...state.cart, {...newItem, quantity: 1/2}]
            }
            
            return{
                ...state,
                cart: state.cart
                
            }
            case "SUM_ITEM_OF_CART": 
            console.log(payload, "LO Q LE LLEGA AL REDUCER")
            const newItem2 = state.items.find(e => e._id === payload)
            const itemInCart2 = state.cart.find(e => e._id === payload)
            
            if(itemInCart2) {
                
                state.cart = state.cart.map((item) =>
                 item._id === newItem2._id 
                 ? {...item, quantity: item.quantity + 1/2} 
                 : item
                );
            } else {
                state.cart = [...state.cart, {...newItem2, quantity: 1/2}]
            }
            
            return{
                ...state,
                cart: state.cart
                
            }

                case "REST_ITEM_OF_CART": 
                const newItem3 = state.items.find(e => e._id === payload)
                const itemInCart3 = state.cart.find(e => e._id === payload)
           
                if(itemInCart3) {
                    state.cart = state.cart.map((item) =>
                     item._id === newItem3._id 
                     ? {...item, quantity: item.quantity - 1/2} 
                     : item
                    );
                } else {
                    state.cart = [...state.cart, {...newItem3, quantity: 1/2}]
                }
                
                return{
                    ...state,
                    cart: state.cart
                    
                }
            
            case "DELETE_ITEM_OF_CART": 
     
            const cartFiltered = state.cart.filter((e) => e._id !== payload)
           
            return{
                ...state,
                cart: cartFiltered
            }    
    }
}               
