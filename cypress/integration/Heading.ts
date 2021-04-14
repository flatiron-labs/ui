describe('<Heading />', () => {
  before(() => {
    cy.prefix('components-typography-heading')
  })

  it('renders headers and is accessible', () => {
    cy.sb('defined-heading-levels')

    for (let i = 1; i <= 6; i += 1) {
      cy.get(`h${i}[data-cy="heading"]`).should('be.visible').should('have.text', `Heading Level: ${i}`)
    }

    cy.a11y()
  })

  it('renders contextual headers and is accessible', () => {
    cy.sb('contextual-heading-levels')

    const levelOrder = [1, 2, 3, 3, 2]

    levelOrder.forEach((level, i) => {
      cy.get(`h${level}[data-cy="heading-${i + 1}"]`)
        .should('be.visible')
        .should('have.text', `Heading Level: ${level}`)
    })

    cy.a11y()
  })
})

export {}
