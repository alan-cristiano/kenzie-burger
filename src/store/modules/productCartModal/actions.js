import { SET_CART_MODAL } from "./actionTypes";

const cartModalIsOpenAction = (value) => {
    return {
        type: SET_CART_MODAL,
        value,
    };
};

export { cartModalIsOpenAction };
