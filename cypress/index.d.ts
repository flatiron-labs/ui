/// <reference types="cypress" />
/// <reference types="cypress-axe" />

// visit(url: string, options?: Partial<VisitOptions>): Chainable<AUTWindow>
// visit(options: Partial<VisitOptions> & { url: string }): Chainable<AUTWindow>

/**
 * Visit the given url
 *
 * @param {string} url The URL to visit. If relative uses `baseUrl`
 * @param {VisitOptions} [options] Pass in an options object to change the default behavior of `cy.visit()`
 * @see https://on.cypress.io/visit
 * @example
 *    cy.visit('http://localhost:3000')
 *    cy.visit('/somewhere') // opens ${baseUrl}/somewhere
 *
 */
declare namespace Cypress {
  interface Chainable {
    // Storybook Commands
    /**
     * Custom command set the prefix of a Storybook test
     * @example cy.prefix('component-avatar')
     */
    prefix(prefix: string): void

    /**
     * Custom command set the prefix of a Storybook test
     * @example cy.unsetPrefix()
     */
    unsetPrefix(): void

    /**
     * Custom command to visit the appropriate Storybook Story URL via the id
     * @example cy.sb('with-image')
     */
    sb(id: string, options?: Partial<VisitOptions>): Chainable<AUTWindow>

    /**
     * Custom command validate a11y conformity
     * @example cy.a11y()
     */
    a11y(): void
  }
}
