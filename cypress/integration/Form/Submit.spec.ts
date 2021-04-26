describe('<Submit />', () => {
  beforeEach(() => {
    cy.prefix('components-form-submit')
  })

  it('should submit the <Form />', () => {
    cy.sb('default')
    cy.a11y()

    cy.get('[data-cy=submit]').click()

    cy.on('window:alert', content => {
      expect(content).to.contains('onSubmit')
    })
  })

  it('should be active', () => {
    cy.sb('active')

    cy.get('[data-cy=submit]').should('have.text', 'Saving...').should('be.disabled')

    cy.a11y()
  })

  it('should be disabled', () => {
    cy.sb('disabled')

    cy.get('[data-cy=submit]').should('have.text', 'Save').should('be.disabled')

    cy.a11y()
  })
})

export {}
