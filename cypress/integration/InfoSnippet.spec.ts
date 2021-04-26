describe('<InfoSnippet />', () => {
  beforeEach(() => {
    cy.prefix('components-infosnippet')
  })

  it('implements fill="currentColor"', () => {
    cy.sb('default')

    cy.get('svg').should('be.visible').should('have.attr', 'fill', 'currentColor')
    cy.contains('div', 'Full Name:').should('be.visible')
    cy.contains('div', 'John Snow').should('be.visible')

    cy.a11y()
  })
})

export {}
