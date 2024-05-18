const initialState = false;

const cartModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CART_MODAL": {
            const { value } = action;
            return value;
        }

        default:
            return state;
    }
};

export default cartModalReducer;
