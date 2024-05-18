const productsListAction = (productsList) => {
    return {
        type: "PRODUCTS_LIST",
        productsList,
    };
};

export { productsListAction };
