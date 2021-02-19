import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from '.'

describe('Footer', () => {
  it('should render a Footer', () => {
    render(<Footer />)
    screen.debug()
    screen.getByText('Accessibility')
  })
})
