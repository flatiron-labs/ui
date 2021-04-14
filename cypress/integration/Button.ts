describe('<Button />', () => {
  beforeEach(() => {
    cy.prefix('components-button')
  })

  afterEach(() => {
    cy.unsetPrefix()
  })

  context('as a button', () => {
    it('acts as a button', () => {
      cy.sb('default')

      cy.get('button').as('button').should('exist').should('contain.text', 'Button')

      cy.a11y()

      cy.on('window:alert', str => {
        expect(str).to.equal('clicked')
      })

      cy.get('@button').click()
    })
  })

  context('as a link', () => {
    it('acts as a link', () => {
      cy.sb('as-link')

      cy.get('a')
        .as('link')
        .should('exist')
        .should('contain.text', 'Button')
        .should('have.attr', 'href')
        .and('include', '/AsLink-test')

      cy.a11y()
    })
  })
})

export {}
