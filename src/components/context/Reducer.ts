import { Item } from "../../interfaces/interfaces";

type ItemAction = 
                  {type: "GET_ITEMS", payload: Item}
                 | {type: "FILTER_PRICE_ASC", payload: Item}
                 | {type: "FILTER_PRICE_DESC", payload: Item}
                 | {type: "FILTER_BY_CATEGORY", payload: Item}
                 | {type: "SEARCH", payload: Item}


export const itemReducer = (state: any, action: ItemAction) => {
    const {type, payload} = action

    switch(type) {
        case "GET_ITEMS":
            console.log(payload, "PAYLOAD")
            return {
                ...state,
                items: payload
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
    }
}               
