describe('<LoadingIndicator />', () => {
  it('renders children and is accessible', () => {
    cy.sb('components-responsivegrid--default')

    cy.get('[data-cy="ResponsiveGrid"]').find('div').should('have.length', 6)

    cy.a11y()
  })
})

export {}
