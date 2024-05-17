const localStorageCartList = localStorage.getItem("@burgerKenzie:cartList");
const initialState = localStorageCartList
    ? JSON.parse(localStorageCartList)
    : [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART": {
            const { product } = action;
            return [...state, product];
        }
        case "REMOVE_CART": {
            const { id } = action;
            return state.filter((product) => product.id !== id);
        }
        case "REMOVE_ALL": {
            return [];
        }

        default:
            return state;
    }
};

export default cartReducer;
