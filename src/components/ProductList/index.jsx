import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import style from "./style.module.scss";

export const ProductList = () => {
    const productList = useSelector((state) => state.products);

    return (
        <ul className={style.productsList} data-testid="products-list">
            {productList.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ul>
    );
};
