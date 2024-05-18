const productSearchAction = (product) => {
    return {
        type: "PRODUCT_SEARCH",
        product,
    };
};

export { productSearchAction };
