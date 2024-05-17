import { MdDelete } from "react-icons/md";
import style from "./style.module.scss";

export const CartItemCard = ({ product, removeProductFromCart }) => {
    return (
        <li className={style.itemCard}>
            <div className={style.cardInfo}>
                <img
                    src={product.img}
                    alt={product.name}
                    data-testid="product-img"
                />
                <div>
                    <h3 className="heading three" data-testid="product-name">
                        {product.name}
                    </h3>
                    <span className="body bold" data-testid="product-price">
                        {product.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </span>
                </div>
            </div>
            <button
                aria-label="delete"
                title="Remover item"
                onClick={() => removeProductFromCart(product)}
                data-testid="delete-product"
            >
                <MdDelete size={25} />
            </button>
        </li>
    );
};
