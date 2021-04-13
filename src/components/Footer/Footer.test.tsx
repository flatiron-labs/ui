describe('<Footer />', () => {
  before(() => {
    cy.prefix('components-footer')
  })
  after(() => {
    cy.unsetPrefix()
  })

  it('renders and is accessible', () => {
    cy.sb('default')

    cy.get('footer').should('be.visible')

    cy.a11y()
  })

  context('default', () => {
    context('<FooterNav />', () => {
      it('renders navigation elements', () => {
        cy.sb('default')

        cy.get('nav').as('nav').should('be.visible')

        cy.get('@nav').find('a').as('links')

        cy.get('@links').should('be.visible').should('have.length', 4)

        cy.get('@links')
          .first()
          .should('be.visible')
          .should('have.text', 'Accessibility')
          .should('have.attr', 'href')
          .and('equal', 'https://flatironschool.com/accessibility')
      })
    })

    context('<FooterSocial />', () => {
      it('renders social elements', () => {
        cy.sb('default')

        // Has 5 links
        cy.get('[data-cy="social"] > a').as('social').should('have.length', 5)

        // Has 5 links with content
        cy.get('[data-cy="social"] > a > svg').should('have.length', 5)

        cy.get('@social').first().should('have.attr', 'href').and('equal', 'https://facebook.com')
      })
    })
  })

  context('locked to bottom', () => {
    it('renders navigation elements', () => {
      cy.sb('locked-to-bottom')

      cy.get('footer')
        .should('be.visible')
        .should('have.attr', 'class')
        .and('match', /--lockToBottom-true/)

      cy.a11y()
    })
  })
})

export {}
