import {updateItemsType, updateUserType} from './types.js';

const updateItems = (data) => {
    return { 
        type: updateItemsType,
        data,
    }
}

const updateUser = (data) => {
    return {
        type: updateUserType,
        data,
    }
}

export {
    updateItems,
    updateUser,
}