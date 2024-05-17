import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { ProductCard } from ".";

describe("Component test: ProductCard", () => {
    const productMock = {
        id: 1,
        name: "nameMock",
        price: 100,
        img: "urlMock",
        category: "categoryMock",
    };

    test("should render correctly and contain product name, price and category information", () => {
        render(<ProductCard product={productMock} />);

        expect(screen.getByTestId("product-name")).toHaveTextContent(
            productMock.name
        );
        expect(screen.getByTestId("product-price")).toHaveTextContent(
            productMock.price
        );
        expect(screen.getByTestId("product-category")).toHaveTextContent(
            productMock.category
        );
    });

    test("should be able to render a add button and fire a click event", () => {
        const handleClickMock = vi.fn();

        render(
            <ProductCard
                product={productMock}
                addProductToCart={handleClickMock}
            />
        );

        const addButton = screen.getByTestId("add-product");
        expect(addButton).toBeInTheDocument();
        fireEvent.click(addButton);
        expect(handleClickMock).toBeCalledTimes(1);
    });
});
