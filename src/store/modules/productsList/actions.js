import { PRODUCTS_LIST } from "./actionTypes";

const productsListAction = (productsList) => {
    return {
        type: PRODUCTS_LIST,
        productsList,
    };
};

export { productsListAction };
