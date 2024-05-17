import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { CartItemCard } from ".";

describe("Component test: CartItemCard", () => {
    const productMock = {
        id: 1,
        name: "nameMock",
        price: 100,
        img: "urlMock",
    };

    test("should render correctly and contain product name and product price information", () => {
        render(<CartItemCard product={productMock} />);

        expect(screen.getByTestId("product-name")).toHaveTextContent(
            productMock.name
        );
        expect(screen.getByTestId("product-price")).toHaveTextContent(
            productMock.price
        );
    });

    test("should be able to render a delete button and fire a click event", () => {
        const handleClickMock = vi.fn();

        render(
            <CartItemCard
                product={productMock}
                removeProductFromCart={handleClickMock}
            />
        );

        const deleteButton = screen.getByTestId("delete-product");
        expect(deleteButton).toBeInTheDocument();
        fireEvent.click(deleteButton);
        expect(handleClickMock).toBeCalledTimes(1);
    });
});
