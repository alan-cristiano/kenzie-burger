import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import api from "../../services/api";

export const HomePage = () => {
    const localStorageCartList = localStorage.getItem("@burgerKenzie:cartList");

    const [loading, setLoading] = useState(true);
    const [productList, setProductList] = useState([]);
    const [cartList, setCartList] = useState(
        localStorageCartList ? JSON.parse(localStorageCartList) : []
    );
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchProduct, setSearchProduct] = useState([]);

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
                setProductList(data);
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

    const cleanFilter = () => {
        setSearchProduct([]);
    };

    const addProductToCart = (product) => {
        if (cartList.some((element) => element.id === product.id)) {
            Toastify({
                text: "Produto já presente no carrinho de compras",
                duration: 2000,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    padding: "0.7rem",
                    fontFamily: "Inter, sans-serif",
                    display: "flex",
                    gap: "0.5rem",
                    background: "var(--color-secondary)",
                },
            }).showToast();
        } else {
            setCartList([...cartList, product]);
            Toastify({
                text: "Produto adicionado ao carrinho de compras",
                duration: 2000,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    padding: "0.7rem",
                    fontFamily: "Inter, sans-serif",
                    display: "flex",
                    gap: "0.5rem",
                    background: "var(--color-primary)",
                },
            }).showToast();
        }
    };

    const removeProductFromCart = ({ id }) => {
        setCartList(cartList.filter((product) => product.id !== id));
    };

    const removeAllProductFromCart = () => {
        setCartList([]);
    };

    return (
        <>
            <Header
                cleanFilter={cleanFilter}
                setModalIsOpen={setModalIsOpen}
                cartList={cartList}
                setSearchProduct={setSearchProduct}
            />
            <main className="container">
                {loading ? (
                    <p className="body">Carregando informações...</p>
                ) : (
                    <>
                        {productsToRender.length > 0 ? (
                            <ProductList
                                productsToRender={productsToRender}
                                addProductToCart={addProductToCart}
                            />
                        ) : (
                            <p className="body">
                                A pesquisa não retornou nenhum produto.
                            </p>
                        )}
                    </>
                )}

                {modalIsOpen ? (
                    <CartModal
                        cartList={cartList}
                        removeProductFromCart={removeProductFromCart}
                        removeAllProductFromCart={removeAllProductFromCart}
                        setModalIsOpen={setModalIsOpen}
                    />
                ) : null}
            </main>
        </>
    );
};
