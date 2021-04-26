describe('<Avatar />', () => {
  beforeEach(() => {
    cy.prefix('components-section')
  })

  const content = 'Test Content'

  context('has static content', () => {
    it('renders content without a title', () => {
      cy.sb('default')

      cy.contains('p', content).should('be.visible')

      cy.a11y()
    })
  })

  context('has title', () => {
    it('renders content with a title', () => {
      cy.sb('with-title')

      cy.contains('h2', 'Test Title').should('be.visible')

      cy.contains('p', content).should('be.visible')

      cy.a11y()
    })
  })

  context('has dynamic content', () => {
    context('awaiting content', () => {
      it('renders a <LoadingIndicator />', () => {
        cy.sb('dynamic-section-loading')

        cy.get('svg').parent().should('have.css', 'justify-content', 'center')

        cy.contains('p', content).should('not.exist')

        cy.contains('p', 'An error has occurred.').should('not.exist')

        cy.a11y()
      })
    })

    context('received content', () => {
      it('renders content', () => {
        cy.sb('dynamic-section-loaded')

        cy.contains('p', content).should('be.visible')

        cy.get('svg').should('not.exist')

        cy.contains('p', 'An error has occurred.').should('not.exist')

        cy.a11y()
      })
    })

    context('error occurred', () => {
      it('renders a default error message', () => {
        cy.sb('dynamic-section-error')

        cy.contains('p', 'An error has occurred.')
          .should('be.visible')
          .parent()
          .should('have.css', 'justify-content', 'center')

        cy.get('svg').should('not.exist')

        cy.contains('p', content).should('not.exist')

        cy.a11y()
      })
    })
  })

  context('multiple', () => {
    it('renders accessibly', () => {
      cy.sb('multiple')

      cy.get('h2').should('have.length', 2)

      cy.a11y()
    })
  })

  context('custom loading component', () => {
    it('renders a custom loading component', () => {
      cy.sb('custom-loading-component')

      cy.contains('p', '[LOADING]').should('be.visible')

      cy.a11y()
    })
  })

  context('custom error component', () => {
    it('renders a custom error component', () => {
      cy.sb('custom-error-component')

      cy.contains('p', '[ERROR]').should('be.visible')

      cy.a11y()
    })
  })

  // context('has image', () => {
  //   it('renders an image', () => {
  //     cy.sb('with-image')

  //     cy.intercept('https://picsum.photos/**', req => {
  //       req.reply({
  //         fixture: 'avatar.jpg'
  //       })
  //     })

  //     cy.get('img')
  //       .should('be.visible')
  //       .and($img => {
  //         // "naturalWidth" and "naturalHeight" are set when the image loads
  //         expect($img[0].naturalWidth).to.be.greaterThan(0)
  //       })

  //     cy.get('span span').should('not.exist')

  //     cy.a11y()
  //   })

  //   context('image fails to render', () => {
  //     it('renders fallback text', () => {
  //       cy.sb('with-image')

  //       cy.intercept('https://picsum.photos/**', req => {
  //         req.reply(404, 'not found', {})
  //       })

  //       cy.get('span img').should('not.exist')
  //       cy.get('span span').should('contain.text', 'JD')

  //       cy.a11y()
  //     })
  //   })
  // })
})

export {}
