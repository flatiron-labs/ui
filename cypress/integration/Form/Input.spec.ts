describe('<Input />', () => {
  beforeEach(() => {
    cy.prefix('components-form-input')
  })

  describe('states', () => {
    it('renders basic <Input />', () => {
      cy.sb('functional')

      cy.get('input[name=email]').as('input')

      cy.get('@input').parent().as('parent')

      cy.get('@input').should('have.attr', 'placeholder', 'Email')

      cy.get('@parent').find('label[for=email]').should('be.visible').should('have.text', 'Email')

      cy.get('@parent').find('span[id=form-email-help]').should('be.visible').should('have.text', 'Required')

      cy.a11y()
    })

    it('renders basic disabled <Input />', () => {
      cy.sb('disabled')

      cy.get('input[name=fullName]').as('input').should('have.attr', 'placeholder', 'Name').should('be.disabled')

      cy.a11y()
    })

    it('visually indicates focus on the parent', () => {
      cy.sb('functional')

      cy.get('input[name=email]')
        .focus()
        .parent()
        .should('have.attr', 'class')
        .and('match', /--active-true/)

      cy.a11y()
    })

    it('visually indicates error on the parent', () => {
      cy.sb('functional')

      cy.get('button[type=submit]').click()

      cy.get('input[name=email]').parent().as('parent')

      cy.get('@parent')
        .should('have.attr', 'class')
        .and('match', /--active-true/)
        .and('match', /--error-true/)

      cy.get('@parent').find('span[id=form-email-help]').should('have.text', 'Email is required')

      cy.a11y()
    })

    it('visually indicates success', () => {
      cy.sb('functional')

      cy.get('button[type=submit]').click()

      cy.get('input[name=email]').as('input')

      cy.get('@input').parent().as('parent')

      cy.get('@input').type('foo@bar.com').should('have.value', 'foo@bar.com')

      cy.get('button[type=submit]').click()

      cy.get('@parent')
        .should('have.attr', 'class')
        .and('match', /--error-false/)

      cy.get('@parent').find('span[id=form-email-help]').should('have.text', 'Required')

      cy.a11y()

      cy.on('window:alert', content => {
        expect(content).to.contains('onSubmit')
      })
    })
  })
})

export {}
