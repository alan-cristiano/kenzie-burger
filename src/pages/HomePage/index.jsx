import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import api from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { productsListAction } from "../../store/modules/products/actions";

export const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const dispatch = useDispatch();
    const handleProductsList = (data) => {
        dispatch(productsListAction(data));
    };

    const productList = useSelector((state) => state.products);
    const searchProduct = useSelector((state) => state.searchProduct);
    const cartList = useSelector((state) => state.cart);
    const productsToRender = searchProduct
        ? productList.filter((product) =>
              product.name.toLowerCase().includes(searchProduct)
          )
        : productList;

    useEffect(() => {
        const getProductList = async () => {
            try {
                setLoading(true);
                const { data } = await api.get("products");
                handleProductsList(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
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
            <Header setModalIsOpen={setModalIsOpen} />
            <main className="container">
                {loading ? (
                    <p className="body">Carregando informações...</p>
                ) : (
                    <>
                        {productsToRender.length > 0 ? (
                            <ProductList productsToRender={productsToRender} />
                        ) : (
                            <p className="body">
                                A pesquisa não retornou nenhum produto.
                            </p>
                        )}
                    </>
                )}

                {modalIsOpen ? (
                    <CartModal setModalIsOpen={setModalIsOpen} />
                ) : null}
            </main>
        </>
    );
};
