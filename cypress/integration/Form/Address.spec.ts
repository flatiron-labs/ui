describe('<Address />', () => {
  beforeEach(() => {
    cy.prefix('components-form-address')
  })

  it('renders all appropriate fields', () => {
    cy.sb('default')

    cy.get('fieldset[data-cy=addressForm]').within(() => {
      // Note: While not visible on screen, it is available to screen readers
      cy.get('legend').should('be.visible').should('have.text', 'Address')

      cy.get('input[name=addressLine1]').should('be.visible')
      cy.get('input[name=addressLine2]').should('be.visible')
      cy.get('input[name=addressCity]').should('be.visible')
      cy.get('select[name=addressState]').should('be.visible')
      cy.get('input[name=addressZipcode]').should('be.visible')
      cy.get('input[name=addressCountry]').should('be.visible')
    })

    cy.a11y()
  })
})

export {}
