import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:5173/",
        specPattern: "../cypress/tests/**/*.spec.{js,jsx,ts,tsx}",
        execTimeout: 8 * 1000,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
