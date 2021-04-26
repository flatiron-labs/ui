describe('<TextCard />', () => {
  beforeEach(() => {
    cy.prefix('components-textcard')
  })

  it('renders the appropriate content', () => {
    cy.sb('default')

    cy.get('h2[data-cy=title]').should('be.visible')
    cy.get('div[data-cy=content]').should('be.visible')

    cy.a11y()
  })
})

export {}
