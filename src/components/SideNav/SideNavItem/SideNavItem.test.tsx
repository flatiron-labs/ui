import React from 'react'
import { render, screen } from '@testing-library/react'

import SideNavItem from './SideNavItem'
import { Props } from './SideNavItem.types'

describe('SideNavItem', () => {
  const testId = 'test-component'

  const renderComponent = ({ ...props }: Props = {}) => {
    render(<SideNavItem data-testid={testId} {...props} />)
  }

  it('should render a side nav item', () => {
    renderComponent()
    screen.getByTestId(testId)
  })
})
