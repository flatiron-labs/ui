describe('<LoadingIndicator />', () => {
  before(() => {
    cy.prefix('components-loadingindicator')
  })
  after(() => {
    cy.unsetPrefix()
  })

  it('renders and is accessible', () => {
    cy.sb('default')
    cy.get('svg')
    cy.a11y()
  })
})

export {}
