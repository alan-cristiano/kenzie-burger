describe("E2E test: Search products", () => {
    it("should be possible to search for a product successfully", () => {
        cy.visit("/");
        cy.getBySel("product-search").type("hamburguer");
        cy.getBySel("product-search").should("have.value", "hamburguer");
        cy.getBySel("search-button").click();
    });

    it("should be possible to clear a product search successfully", () => {
        cy.visit("/");
        cy.getBySel("product-search").type("hamburguer");
        cy.getBySel("product-search").should("have.value", "hamburguer");
        cy.getBySel("search-button").click();

        cy.getBySel("clear-button").click();
    });
});
