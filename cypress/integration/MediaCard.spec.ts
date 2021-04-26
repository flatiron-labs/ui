describe('<OverlayCard />', () => {
  beforeEach(() => {
    cy.prefix('components-cards-mediacard')
  })

  it('renders a fully-featured media card and sets color appropriately', () => {
    cy.sb('default')

    cy.get('img').should('be.visible').should('have.attr', 'src', 'https://via.placeholder.com/348x193')

    cy.contains('h2', 'HTML Tutorial for Beginners')
    cy.contains('p', 'Learn HTML for a career in web development.')
    cy.contains('button', 'View').should('be.visible')

    cy.a11y()
  })

  it('should be accessible with multiple similar components', () => {
    cy.sb('multiple')
    cy.a11y()
  })
})

export {}
