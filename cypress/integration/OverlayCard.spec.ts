describe('<OverlayCard />', () => {
  beforeEach(() => {
    cy.prefix('components-cards-overlaycard')
  })

  let accentColor = 'rgb(232, 3, 82)'

  it('renders a fully-featured overlay card and sets color appropriately', () => {
    cy.sb('default')

    cy.contains('div', 'Coursework & Curriculum').as('image')

    cy.get('@image').should('be.visible').should('have.css', 'border-color', accentColor)

    cy.get('@image')
      .should('have.css', 'background-image')
      .and('match', /overlay-pink/)

    cy.contains('button', 'View Canvas').should('be.visible').should('have.css', 'border-color', accentColor)

    cy.a11y()
  })
})

export {}
