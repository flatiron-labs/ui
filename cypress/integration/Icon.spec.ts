describe('<Icon />', () => {
  beforeEach(() => {
    cy.prefix('components-icon')
  })

  it('implements fill="currentColor"', () => {
    cy.sb('default')

    cy.get('[data-cy=icon-container] svg').should('be.visible').should('have.attr', 'fill', 'currentColor')

    cy.a11y()
  })
})

export {}
