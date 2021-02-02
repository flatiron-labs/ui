import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

test('renders a primary button', () => {
  const testId = 'button-primary'
  render(<Button primary data-testid={testId}>foo</Button>)

  expect(screen.getByTestId(testId))
  expect(screen.getByText('foo')).toBeInTheDocument()
})

test('renders a secondary button', () => {
  const testId = 'button-secondary'
  render(<Button data-testid={testId}>bar</Button>)

  screen.getByTestId(testId)
  expect(screen.getByText('bar')).toBeInTheDocument()
})