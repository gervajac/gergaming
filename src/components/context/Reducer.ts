import { Item } from "../../interfaces/interfaces";

type ItemAction = 
                  {type: "GET_ITEMS", payload: Item}


export const itemReducer = (state: any, action: ItemAction) => {
    const {type, payload} = action

    switch(type) {
        case "GET_ITEMS":
            console.log(payload, "PAYLOAD")
            return {
                ...state,
                items: payload
            }
    }
}               
