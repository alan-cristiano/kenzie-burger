import style from "./style.module.scss";

export const ProductCard = ({ product, addProductToCart }) => {
    console.log(product);
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
