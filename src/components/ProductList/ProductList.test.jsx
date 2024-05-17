import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { ProductList } from ".";

describe("Component test: ProductList", () => {
    const productsToRenderMock = [
        {
            id: 1,
            category: "categoryMock1",
            name: "nameMock1",
            price: 10,
            img: "urlMock1",
        },
        {
            id: 2,
            category: "categoryMock2",
            name: "nameMock2",
            price: 100,
            img: "urlMock2",
        },
    ];

    test("should render correctly with all items", () => {
        render(<ProductList productsToRender={productsToRenderMock} />);

        const productCard = screen.getAllByRole("listitem");
        expect(productCard).toHaveLength(2);

        productCard.forEach((product, index) => {
            expect(product).toHaveTextContent(productsToRenderMock[index].name);
            expect(product).toHaveTextContent(
                productsToRenderMock[index].price
            );
            expect(product).toHaveTextContent(
                productsToRenderMock[index].category
            );
        });
    });
});
