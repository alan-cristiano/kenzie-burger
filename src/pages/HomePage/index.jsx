import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import api from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { productsListAction } from "../../store/modules/productsList/actions";

export const HomePage = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const modalIsOpen = useSelector((state) => state.cartModal);
    const productList = useSelector((state) => state.products);
    const searchProduct = useSelector((state) => state.searchProduct);
    const cartList = useSelector((state) => state.cart);

    useEffect(() => {
        const getProductList = async () => {
            try {
                setLoading(true);
                const { data } = await api.get("products");
                dispatch(productsListAction(data));
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getProductList();
    }, []);

    useEffect(() => {
        const filteredProductList = async () => {
            try {
                setLoading(true);
                const { data } = await api.get("products");
                const list = data.filter((product) =>
                    product.name.toLowerCase().includes(searchProduct)
                );
                dispatch(productsListAction(list));
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        filteredProductList();
    }, [searchProduct]);

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
                {loading ? (
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
