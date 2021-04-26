describe('<PageHeading />', () => {
  beforeEach(() => {
    cy.prefix('components-pageheading')
  })

  let title = 'Welcome John Doe'
  let program = 'Software Engineering'
  let cohort = 'Fall 2021'
  let color = {
    default: 'rgb(255, 255, 255)',
    highlight: 'rgb(249, 197, 26)'
  }

  it('renders a fully-featured page header', () => {
    cy.sb('default')

    cy.get('h1[data-cy=title]').should('be.visible').should('have.text', title)

    cy.get('h2[data-cy=subtitle] span').as('spans').should('have.length', 2)

    cy.get('@spans')
      .eq(0)
      .should('be.visible')
      .should('have.text', program)
      .should('have.css', 'color', color.highlight)

    cy.get('@spans').eq(1).should('be.visible').should('have.text', cohort).should('have.css', 'color', color.default)

    cy.a11y()
  })

  it('renders the title only, using composition', () => {
    cy.sb('title-only')

    cy.get('h1[data-cy=title]').should('be.visible').should('have.text', title)

    cy.get('h2[data-cy=subtitle]').should('not.exist')

    cy.a11y()
  })

  it('renders the title only, without composition', () => {
    cy.sb('title-only-without-composition')

    cy.get('[data-cy=container] h1').should('be.visible').should('have.text', title)

    cy.get('h2[data-cy=subtitle]').should('not.exist')

    cy.a11y()
  })

  it('renders the subtitle, without composition', () => {
    cy.sb('subtitle-without-composition')

    cy.get('h2[data-cy=subtitle] span')
      .should('have.length', 1)
      .should('be.visible')
      .should('have.text', program)
      .should('have.css', 'color', color.highlight)

    cy.a11y()
  })
})

export {}
