import React from 'react'
import { render, screen } from '@testing-library/react'
import * as useWindowWidth from '@react-hook/window-size'
import SideNav from './SideNav'
import SideNavItem from './SideNavItem/SideNavItem'
import Props from './SideNav.types'

describe('SideNav', () => {
  const testId = 'test-component'

  const renderComponent = ({ children, ...props }: Props = {}) => {
    render(
      <SideNav data-testid={testId} {...props}>
        {children}
      </SideNav>
    )
  }

  it('should render a side nav', () => {
    renderComponent()
    screen.getByTestId(testId)
  })

  it('should render children', () => {
    jest.spyOn(useWindowWidth, 'useWindowWidth').mockImplementation(() => 900)
    renderComponent({ children: <SideNavItem>Home</SideNavItem> })
    expect(screen.getByTestId(testId)).toHaveTextContent('Home')
  })
})
