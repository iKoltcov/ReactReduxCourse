import { updateItemsType } from './types.js';

const updateItems = (data) => {
    return { 
        type: updateItemsType,
        data,
    }
}

export {
    updateItems,
}