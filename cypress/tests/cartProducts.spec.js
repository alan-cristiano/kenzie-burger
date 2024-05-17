describe("E2E test: Cart products", () => {
    it("should add one product to cart successfully", () => {
        cy.visit("/");
        cy.getBySel("products-list")
            .find("li:first")
            .find('[data-testid="add-product"]')
            .click();
        cy.getBySel("cart-length").should("contain.text", "1");
    });

    it("should remove one product from cart successfully", () => {
        cy.visit("/");
        cy.getBySel("products-list")
            .find("li:first")
            .find('[data-testid="add-product"]')
            .click();
        cy.getBySel("products-list")
            .find("li:first")
            .next()
            .find('[data-testid="add-product"]')
            .click();
        cy.getBySel("cart-length").should("contain.text", "2");

        cy.getBySel("cart-button").click();
        cy.getBySel("product-cart-list")
            .find("li:first")
            .find('[data-testid="delete-product"]')
            .click();

        cy.getBySel("cart-length").should("contain.text", "1");
        cy.getBySel("close-cart").click();
    });

    it("should remove all products from cart successfully", () => {
        cy.visit("/");
        cy.getBySel("products-list")
            .find("li:first")
            .find('[data-testid="add-product"]')
            .click();
        cy.getBySel("products-list")
            .find("li:first")
            .next()
            .find('[data-testid="add-product"]')
            .click();
        cy.getBySel("cart-length").should("contain.text", "2");

        cy.getBySel("cart-button").click();
        cy.getBySel("delete-all-product").click();
        cy.getBySel("cart-length").should("contain.text", "0");
        cy.getBySel("close-cart").click();
    });
});
