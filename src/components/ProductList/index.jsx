import { ProductCard } from "./ProductCard";
import style from "./style.module.scss";

export const ProductList = ({ productsToRender, addProductToCart }) => {
    return (
        <ul className={style.productsList} data-testid="products-list">
            {productsToRender.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    addProductToCart={addProductToCart}
                />
            ))}
        </ul>
    );
};
