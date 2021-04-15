describe('<Select />', () => {
  beforeEach(() => {
    cy.prefix('components-form-select')
  })

  const colors = {
    focus: 'rgb(31, 32, 54)',
    error: 'rgb(232, 3, 82)'
  }

  describe('states', () => {
    it('renders basic <Select />', () => {
      cy.sb('default')

      cy.get('select[name=homeState]').as('select')

      cy.get('@select').parent().as('parent')

      cy.get('@select').should('have.value', '')

      cy.get('@parent').find('label[for=homeState]').should('be.visible').should('have.text', 'State')

      cy.get('@parent').find('span[id=form-homeState-help]').should('be.visible').should('have.text', 'Select a State')

      cy.a11y()
    })

    it('renders basic disabled <Select />', () => {
      cy.sb('disabled')

      cy.get('select[name=homeState]').should('be.disabled')

      cy.a11y()
    })

    it('visually indicates focus on the select', () => {
      cy.sb('default')

      cy.get('select[name=homeState]').focus().should('have.css', 'borderColor', colors.focus)

      cy.a11y()
    })

    it('visually indicates error on the select', () => {
      cy.sb('default')

      cy.get('select[name=homeState]').as('select')

      cy.get('@select').select('NY').should('have.value', 'NY').should('have.css', 'borderColor', colors.error)

      cy.get('@select')
        .parent()
        .find('span[id=form-homeState-help]')
        .should('be.visible')
        .should('have.css', 'color', colors.error)
        .should('have.text', 'Must be PA')

      cy.a11y()
    })

    it('visually indicates success', () => {
      cy.sb('default')

      cy.get('select[name=homeState]').as('select')

      cy.get('@select').focus().select('PA').should('have.value', 'PA').should('have.css', 'borderColor', colors.focus)

      cy.get('button[type=submit]').click()

      cy.get('@select').parent().as('parent')

      cy.get('@parent')
        .should('have.attr', 'class')
        .and('match', /--error-false/)

      cy.get('@parent').find('span[id=form-homeState-help]').should('have.text', 'Select a State')

      cy.a11y()

      cy.on('window:alert', content => {
        expect(content).to.contains('onSubmit')
      })
    })
  })
})

export {}
