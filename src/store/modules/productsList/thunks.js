import { productsListAction } from "./actions";
import { loadingPageAction } from "../loadingPage/actions";
import api from "../../../services/api";

const searchProductThunk = (searchProduct) => {
    return async (dispatch) => {
        try {
            dispatch(loadingPageAction(true));
            const { data } = await api.get("products");
            const search = data.filter((product) =>
                product.name.toLowerCase().includes(searchProduct)
            );
            dispatch(productsListAction(search));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(loadingPageAction(false));
        }
    };
};

const clearSearchProductThunk = () => {
    return async (dispatch) => {
        try {
            dispatch(loadingPageAction(true));
            const { data } = await api.get("products");
            dispatch(productsListAction(data));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(loadingPageAction(false));
        }
    };
};

export { searchProductThunk, clearSearchProductThunk };
