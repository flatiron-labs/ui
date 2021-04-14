describe('<LoadingIndicator />', () => {
  it('renders and is accessible', () => {
    cy.sb('components-loadingindicator--default')
    cy.get('svg')
    cy.a11y()
  })
})

export {}
