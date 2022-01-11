import {updateItemsType} from "../actions/types";

const default_state = {
    items: []
}

const itemListReducer = (state = default_state, action) => {
    switch (action.type){
        case updateItemsType:
            return action.payload
        default:
            return state.items;
    }
}

export default itemListReducer