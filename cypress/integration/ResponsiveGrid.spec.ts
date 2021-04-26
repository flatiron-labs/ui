describe('<LoadingIndicator />', () => {
  it('renders children and is accessible', () => {
    cy.sb('components-responsivegrid--default')

    cy.get('[data-cy="ResponsiveGrid"]')
      .should('have.css', 'grid-gap', '20px 20px')
      .find('div')
      .should('have.length', 6)

    cy.a11y()
  })
})

export {}
