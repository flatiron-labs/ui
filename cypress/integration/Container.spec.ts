describe('<Container />', () => {
  beforeEach(() => {
    cy.prefix('components-container')
  })

  context('global styles', () => {
    it('appends global styles', () => {
      cy.sb('default')
      cy.get('style#stitches')
    })
  })

  context('children', () => {
    it('accepts children', () => {
      cy.sb('default')

      cy.get('#root').should('contain.text', '[children]')

      cy.a11y()
    })
  })
})

export {}
