import React from 'react'
import * as useWindowWidth from '@react-hook/window-size'
import { render, screen } from '~/test/utils'
import { SideNav, SideNavItem } from '.'

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
