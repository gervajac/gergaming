import { Item } from "../../interfaces/interfaces";

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
            case "GET_ITEM_DETAILS": 
            return{
                ...state,
                details: payload
            }
            case "ADD_ITEM_TO_CART": 

            const newItem = state.allItems.find(e => e._id === payload)
            const itemInCart = state.cart.find(e => e._id === payload)

            console.log(newItem, "nuevo item");
            console.log(itemInCart, "item ya agregado");
            
            if(itemInCart) {
                console.log(itemInCart, "ABER CUANTAS VECES ENTRA ACA")
                state.cart = state.cart.map((item) =>
                 item._id === newItem._id 
                 ? {...item, quantity: item.quantity + 1/2} 
                 : item
                );
            } else {
                state.cart = [...state.cart, {...newItem, quantity: 1/2}]
                console.log(state.cart, "ESTADO DEL CARRRRRRRRRRRRRITOOO")
            }
            
            return{
                ...state,
                cart: state.cart
                
            }
            case "SUM_ITEM_OF_CART": 
            const newItem2 = state.allItems.find(e => e._id === payload)
            const itemInCart2 = state.cart.find(e => e._id === payload)
            
            if(itemInCart2) {
                console.log(itemInCart2, "ABER CUANTAS VECES ENTRA ACA")
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
                const newItem3 = state.allItems.find(e => e._id === payload)
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
            console.log(payload, "PAYLOAD Q ME INTERESA")
            const cartFiltered = state.cart.filter((e) => e._id !== payload)
            console.log(cartFiltered)
            return{
                ...state,
                cart: cartFiltered
            }    
    }
}               
