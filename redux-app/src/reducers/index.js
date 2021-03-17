import { updateItemsType } from "../actions/types.js"

const initialState = {
    items: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case updateItemsType:
            return {
                items: action.data,
            }
        default:
            return state;
    }
}

export {
    reducer,
}