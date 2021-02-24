import React from 'react'
import { render, screen } from '~/test/utils'

import { TextCard } from '.'

describe('TextCard', () => {
  const label = 'Course:'
  const value = 'Software Engineering'
  const renderComponent = () => {
    render(<TextCard label={label} value={value} />)
  }

  it('should render label', () => {
    renderComponent()
    screen.getByText(/Course:/i)
  })

  it('should render value', () => {
    renderComponent()
    screen.getByText(/Software Engineering/i)
  })
})
