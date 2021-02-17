import React from 'react'
import { render, screen } from '@testing-library/react'
import * as useWindowWidth from '@react-hook/window-size'
import SideNav from './SideNav'
import SideNavItem from './SideNavItem/SideNavItem'

describe('SideNav', () => {
  const testId = 'test-component'

  const renderComponent = () => {
    render(
      <SideNav data-testid={testId} isOpen>
        <SideNavItem>Home</SideNavItem>
      </SideNav>
    )
  }

  it('should render a side nav', () => {
    renderComponent()
    screen.getByTestId(testId)
  })

  it('should render children', () => {
    jest.spyOn(useWindowWidth, 'useWindowWidth').mockImplementation(() => 900)
    renderComponent()
    expect(screen.getByTestId(testId)).toHaveTextContent('Home')
  })
})
