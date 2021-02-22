import React from 'react'
import { render, screen } from '~/test/utils'

import { Avatar, AvatarProps } from '.'

describe('Avatar', () => {
  const testId = 'test-component'

  const renderComponent = ({ children, color, backgroundColor }: AvatarProps) => {
    render(
      <Avatar data-testid={testId} color={color} backgroundColor={backgroundColor}>
        {children}
      </Avatar>
    )
  }

  it('should render children', () => {
    renderComponent({ children: 'JS' })
    screen.getByText(/JS/i)
  })
})
