import itemListReducer from "./items-list-reducer";
import userReducer from "./user-reducer";

const reducer = (state, action) => {
    return {
        items: itemListReducer(state, action),
        user: userReducer(state, action),
    }
}

export {
    reducer,
}