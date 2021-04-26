describe('<ProgressBar />', () => {
  beforeEach(() => {
    cy.prefix('components-progressbar')
    cy.viewport(1000, 600)
  })

  let color = {
    frame: 'rgb(127, 138, 142)',
    default: 'rgb(92, 92, 92)',
    yellow: 'rgb(249, 197, 26)'
  }

  it('renders a progress bar', () => {
    cy.sb('default')

    cy.get('div[aria-label=default]').as('root')

    cy.get('@root').should('be.visible').should('have.css', 'background-color', color.frame)

    cy.get('@root')
      .find('div')
      .should('be.visible')
      .should('have.css', 'background-color', color.default)
      .should('have.css', 'width', '500px')

    cy.a11y()
  })

  it('renders different colors', () => {
    cy.sb('custom-color')

    cy.get('div[aria-label=color]').as('root')

    cy.get('@root').should('be.visible').should('have.css', 'background-color', color.frame)

    cy.get('@root')
      .find('div')
      .should('be.visible')
      .should('have.css', 'background-color', color.yellow)
      .should('have.css', 'width', '500px')

    cy.a11y()
  })

  it('is accessible with multiple progress bars', () => {
    cy.sb('multiple')

    cy.get('div[aria-label=purple]').should('be.visible')
    cy.get('div[aria-label=cyan]').should('be.visible')

    cy.a11y()
  })
})

export {}
