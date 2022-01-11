import {updateItemsType, updateUserType, itemAddedToCartType, itemRemovedFromCartType} from './types.js';

const updateItems = (items) => {
    return { 
        type: updateItemsType,
        payload: items,
    }
}

const updateUser = (user) => {
    return {
        type: updateUserType,
        payload: user,
    }
}

const itemAddedToCart = (itemId) => {
    return {
        type: itemAddedToCartType,
        payload: itemId,
    }
}

const itemRemovedFromCart = (itemId) => {
    return {
        type: itemRemovedFromCartType,
        payload: itemId,
    }
}

export {
    updateItems,
    updateUser,
    itemAddedToCart,
    itemRemovedFromCart,
}