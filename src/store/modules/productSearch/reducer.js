const initialState = [];

const searchProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCT_SEARCH": {
            const { product } = action;
            return product;
        }
        default:
            return state;
    }
};

export default searchProductReducer;
