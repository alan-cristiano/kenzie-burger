import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import style from "./style.module.scss";

export const ProductList = ({ productsToRender }) => {
    return (
        <ul className={style.productsList} data-testid="products-list">
            {productsToRender.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ul>
    );
};
