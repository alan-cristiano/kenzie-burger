import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { productSearchAction } from "../../store/modules/productSearch/actions";
import { cartModalIsOpenAction } from "../../store/modules/productCartModal/actions";

export const Header = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");
    const cartList = useSelector((state) => state.cart);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(productSearchAction(value));
        setValue("");
    };

    const cleanFilter = () => {
        dispatch(productSearchAction([]));
    };

    return (
        <header className={style.header}>
            <div className={`${style.headerContent} container`}>
                <img src={Logo} alt="Logo Kenzie Burguer" />
                <div className={style.headerInfo}>
                    <form
                        className={style.searchInput}
                        onSubmit={(e) => onSubmit(e)}
                    >
                        <button data-testid="search-button" type="submit">
                            <MdSearch size={25} />
                        </button>
                        <input
                            data-testid="product-search"
                            className="body"
                            placeholder="Pesquise pelo produto"
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <button
                            data-testid="clear-button"
                            className="body"
                            type="button"
                            onClick={() => cleanFilter()}
                        >
                            Limpar filtro
                        </button>
                    </form>
                    <button
                        data-testid="cart-button"
                        className={style.cartButton}
                        onClick={() => dispatch(cartModalIsOpenAction(true))}
                    >
                        ;
                        <MdShoppingCart size={27} />
                        <span data-testid="cart-length">{cartList.length}</span>
                    </button>
                </div>
            </div>
        </header>
    );
};
