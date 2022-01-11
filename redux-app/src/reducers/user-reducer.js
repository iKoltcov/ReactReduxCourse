import {itemAddedToCartType, itemRemovedFromCartType, updateUserType} from "../actions/types";

const updateCartItems = (cartItems, item, index = -1) => {
    if(item.amount === 0) {
        return [
            ...cartItems.slice(0, index),
            ...cartItems.slice(index + 1)
        ]
    }

    if (index === -1){
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, index),
        item,
        ...cartItems.slice(index + 1)
    ]
}

const createCartItem = (item, purchasedItem = {}, delta) => {
    const {
        id = item.id,
        name = item.name,
        price = item.price,
        amount = 0} = purchasedItem

    return {
        id: id,
        name: name,
        price: price,
        amount: amount + delta
    }
}

const updateOrder = (state, itemId, delta) => {
    const { items, user } = state
    const item = items.find(x => x.id === itemId)
    const purchasedItemIndex = user.purchased.findIndex(x => x.id === itemId)
    return {
        ...user,
        purchased: updateCartItems(
            user.purchased,
            createCartItem(item, user.purchased[purchasedItemIndex], delta),
            purchasedItemIndex
        )
    }
}

const default_state = {
    user: null
}

const userReducer = (state = default_state, action) => {
    switch (action.type){
        case updateUserType:
            return action.payload
        case itemAddedToCartType:
            return updateOrder(state, action.payload, 1)
        case itemRemovedFromCartType:
            return updateOrder(state, action.payload, -1)
        default:
            return state.user;
    }
}

export default userReducer