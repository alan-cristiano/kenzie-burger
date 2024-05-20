import { useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import api from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { productsListAction } from "../../store/modules/productsList/actions";
import { loadingPageAction } from "../../store/modules/loadingPage/actions";

export const HomePage = () => {
    const dispatch = useDispatch();

    const modalIsOpen = useSelector((state) => state.cartModal);
    const productList = useSelector((state) => state.products);
    const cartList = useSelector((state) => state.cart);
    const loadingPage = useSelector((state) => state.loadingPage);

    useEffect(() => {
        const getProductList = async () => {
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
        getProductList();
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "@burgerKenzie:cartList",
            JSON.stringify(cartList)
        );
    }, [cartList]);

    return (
        <>
            <Header />
            <main className="container">
                {loadingPage ? (
                    <p className="body">Carregando informações...</p>
                ) : (
                    <>
                        {productList.length > 0 ? (
                            <ProductList />
                        ) : (
                            <p className="body">
                                A pesquisa não retornou nenhum produto.
                            </p>
                        )}
                    </>
                )}

                {modalIsOpen ? <CartModal /> : null}
            </main>
        </>
    );
};
