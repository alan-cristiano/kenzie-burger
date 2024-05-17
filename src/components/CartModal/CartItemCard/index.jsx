import { MdDelete } from "react-icons/md";
import style from "./style.module.scss";
import { useDispatch } from "react-redux";
import { removeFromCartAction } from "../../../store/modules/cart/actions";

export const CartItemCard = ({ product }) => {
    const dispatch = useDispatch();
    const handleRemoveFromCartList = (product) => {
        dispatch(removeFromCartAction(product));
    };
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
                onClick={() => handleRemoveFromCartList(product.id)}
                data-testid="delete-product"
            >
                <MdDelete size={25} />
            </button>
        </li>
    );
};
