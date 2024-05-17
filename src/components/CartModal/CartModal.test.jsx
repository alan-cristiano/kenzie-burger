import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { CartModal } from ".";

describe("Component test: CartModal", () => {
    const cartListMock = [
        {
            id: 1,
            category: "Sanduíches",
            name: "nameMock1",
            price: 10,
            img: "urlMock1",
        },
        {
            id: 2,
            category: "Bebidas",
            name: "nameMock2",
            price: 100,
            img: "urlMock2",
        },
    ];

    const totalValueMock = cartListMock.reduce((prevValue, product) => {
        return prevValue + product.price;
    }, 0);

    test("should render correctly with all items", () => {
        render(<CartModal cartList={cartListMock} />);

        const cartItemCard = screen.getAllByRole("listitem");
        expect(cartItemCard).toHaveLength(2);

        cartItemCard.forEach((product, index) => {
            expect(product).toHaveTextContent(cartListMock[index].name);
            expect(product).toHaveTextContent(cartListMock[index].price);
        });
    });

    test("should render the total value to pay for the cart products", () => {
        render(<CartModal cartList={cartListMock} />);

        const totalPrice = screen.getByTestId("total-price");
        expect(totalPrice).toHaveTextContent(totalValueMock);
    });

    test("should be able to render a delete button and fire a click event", () => {
        const handleClickMock = vi.fn();

        render(
            <CartModal
                cartList={cartListMock}
                removeAllProductFromCart={handleClickMock}
            />
        );

        const deleteAllButton = screen.getByTestId("delete-all-product");
        expect(deleteAllButton).toBeInTheDocument();
        fireEvent.click(deleteAllButton);
        expect(handleClickMock).toBeCalledTimes(1);
    });
});
