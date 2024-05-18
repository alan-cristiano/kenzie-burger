const initialState = [];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCTS_LIST": {
            const { productsList } = action;
            return productsList;
        }

        default:
            return state;
    }
};

export default productsReducer;
