import React from 'react'
import { render, screen } from '~/test/utils'

import { SideNavItem, SideNavItemProps } from '.'

describe('SideNavItem', () => {
  const testId = 'test-component'

  const renderComponent = (props: SideNavItemProps = {}) => {
    render(<SideNavItem data-testid={testId} {...props} />)
  }

  it('should render a side nav item', () => {
    renderComponent()
    screen.getByTestId(testId)
  })
})
