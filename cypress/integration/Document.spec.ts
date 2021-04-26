describe('<Document />', () => {
  beforeEach(() => {
    cy.prefix('components-document')
  })

  it('renders and is accessible', () => {
    cy.sb('default')

    cy.contains('div', 'Resume').should('be.visible')
    cy.contains('h2', 'my_resume.pdf').should('be.visible')
    cy.contains('div', 'Requested').should('be.visible')

    cy.contains('div', 'Uploaded').should('be.visible')

    cy.contains('a', 'View').should('be.visible').should('have.attr', 'href', 'https://google.com')

    cy.a11y()
  })
})

export {}
