import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.scss";
import { addToCartAction } from "../../../store/modules/productCart/actions";

export const ProductCard = ({ product }) => {
    const cartList = useSelector((state) => state.cart);

    const dispatch = useDispatch();

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
            dispatch(addToCartAction(product));
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

    return (
        <li className={style.cardContent}>
            <div className={style.imageContent}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={style.cardInfo}>
                <h3 data-testid="product-name" className="heading three">
                    {product.name}
                </h3>
                <span data-testid="product-category" className="caption">
                    {product.category}
                </span>
                <span data-testid="product-price" className="body bold">
                    {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </span>
                <button
                    data-testid="add-product"
                    className="button small"
                    onClick={() => addProductToCart(product)}
                >
                    Adicionar
                </button>
            </div>
        </li>
    );
};
