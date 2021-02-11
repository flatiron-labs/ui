import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '~/components/Button/Button'

describe('component re-exporting', () => {
  const testId = 'test-component'

  it('should render a Button', () => {
    render(<Button data-testid={testId} />)
    expect(screen.getByTestId(testId))
  })
})
