import React from 'react'
import { render, screen } from '@testing-library/react'

import { SideNav } from './SideNav'
import { SideNavItem } from './SideNavItem/SideNavItem'
import { Props } from './SideNav.types'

describe('SideNav', () => {
  const testId = 'test-component'

  const renderComponent = ({ ...props }: Props = {}) => {
    render(<SideNav data-testid={testId} {...props} />)
  }

  it('should render a side nav', () => {
    renderComponent()
    screen.getByTestId(testId)
  })

  it('should render children', () => {
    renderComponent({ children: <SideNavItem>Home</SideNavItem> })
    expect(screen.getByTestId(testId)).toHaveTextContent('Home')
  })
})
