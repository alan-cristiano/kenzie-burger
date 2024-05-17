import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { Header } from ".";

describe("Component test: Header", () => {
    const cartListMock = [
        {
            id: 1,
            name: "nameMock",
            price: 100,
            img: "urlMock",
            category: "categoryMock",
        },
    ];

    test("should update correctly the search input", () => {
        render(<Header cartList={cartListMock} />);

        const searchInput = screen.getByTestId("product-search");

        expect(searchInput).toBeInTheDocument();

        fireEvent.change(searchInput, { target: { value: "searchMock" } });
        expect(searchInput.value).toBe("searchMock");
    });

    test("should be able to render a search button and fire a click event", () => {
        const setSearchProductMock = vi.fn();

        render(
            <Header
                cartList={cartListMock}
                setSearchProduct={setSearchProductMock}
            />
        );

        const searchButton = screen.getByTestId("search-button");
        expect(searchButton).toBeInTheDocument();
        fireEvent.click(searchButton);
        expect(setSearchProductMock).toBeCalled();
    });

    test("should be able to render a clear filter button and fire a click event", () => {
        const clearMock = vi.fn();

        render(<Header cartList={cartListMock} cleanFilter={clearMock} />);

        const clearButton = screen.getByTestId("clear-button");
        expect(clearButton).toBeInTheDocument();
        fireEvent.click(clearButton);
        expect(clearMock).toBeCalled();
    });
});
