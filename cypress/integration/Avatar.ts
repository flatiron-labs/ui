describe('<Avatar />', () => {
  beforeEach(() => {
    cy.prefix('components-avatar')
  })

  afterEach(() => {
    cy.unsetPrefix()
  })

  context('has image', () => {
    it('renders an image', () => {
      cy.sb('with-image')

      cy.intercept('https://picsum.photos/**', req => {
        req.reply({
          fixture: 'avatar.jpg'
        })
      })

      cy.get('img')
        .should('be.visible')
        .and($img => {
          // "naturalWidth" and "naturalHeight" are set when the image loads
          expect($img[0].naturalWidth).to.be.greaterThan(0)
        })

      cy.get('span span').should('not.exist')

      cy.a11y()
    })

    context('image fails to render', () => {
      it('renders fallback text', () => {
        cy.sb('with-image')

        cy.intercept('https://picsum.photos/**', req => {
          req.reply(404, 'not found', {})
        })

        cy.get('span img').should('not.exist')
        cy.get('span span').should('contain.text', 'JD')

        cy.a11y()
      })
    })
  })

  context('text only', () => {
    it('renders text', () => {
      cy.sb('text-only')

      cy.get('span span').should('contain.text', 'JD')
      cy.a11y()
    })
  })
})

export {}
