import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { useHandleOutClick } from "../../hooks/useHandleOutClick";
import { useHandleKeydown } from "../../hooks/useHandleKeydown";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromCartAction } from "../../store/modules/productCart/actions";
import { cartModalIsOpenAction } from "../../store/modules/productCartModal/actions";

export const CartModal = () => {
    const dispatch = useDispatch();

    const cartList = useSelector((state) => state.cart);

    const total = cartList.reduce((prevValue, product) => {
        return prevValue + product.price;
    }, 0);

    const modalRef = useHandleOutClick(() => {
        dispatch(cartModalIsOpenAction(false));
    });

    const closeModalRef = useHandleKeydown("Escape", (element) => {
        element?.click();
    });

    return (
        <div role="dialog" className={style.modalOverlay}>
            <div className={style.modalContainer}>
                <div ref={modalRef} className={style.modalBox}>
                    <div className={style.modalHeader}>
                        <h2 className="heading four">Carrinho de compras</h2>
                        <button
                            data-testid="close-cart"
                            ref={closeModalRef}
                            aria-label="close"
                            title="Fechar"
                            onClick={() =>
                                dispatch(cartModalIsOpenAction(false))
                            }
                        >
                            <MdClose size={21} />
                        </button>
                    </div>
                    <div className={style.modalContent}>
                        <div>
                            <ul
                                data-testid="product-cart-list"
                                className={style.modalCartList}
                            >
                                {cartList.length > 0 ? (
                                    cartList.map((product) => (
                                        <CartItemCard
                                            key={product.id}
                                            product={product}
                                        />
                                    ))
                                ) : (
                                    <p className="headline">
                                        Seu carrinho está vazio.
                                    </p>
                                )}
                            </ul>
                        </div>
                        <div>
                            <div className={style.modalSum}>
                                <span className="headline">Total</span>
                                <span
                                    data-testid="total-price"
                                    className="body "
                                >
                                    {total.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </span>
                            </div>
                            <button
                                data-testid="delete-all-product"
                                className="button"
                                onClick={() =>
                                    dispatch(removeAllFromCartAction())
                                }
                            >
                                Remover todos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
