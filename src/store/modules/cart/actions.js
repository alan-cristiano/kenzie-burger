const addToCartAction = (product) => {
    return {
        type: "ADD_CART",
        product,
    };
};

const removeFromCartAction = (id) => {
    return {
        type: "REMOVE_CART",
        id,
    };
};

const removeAllFromCartAction = (id) => {
    return {
        type: "REMOVE_ALL",
    };
};

export { addToCartAction, removeFromCartAction, removeAllFromCartAction };
