import { updateItemsType, updateUserType } from "../actions/types.js"

const initialState = {
    items: [],
    user: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case updateItemsType:
            return {
                ...state,
                items: action.data,
            }
        case updateUserType:
            return {
                ...state,
                user: action.data,
            }
        default:
            return state;
    }
}

export {
    reducer,
}