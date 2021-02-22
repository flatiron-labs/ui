import React from 'react'
import { render, screen } from '~/test/utils'
import { Button } from '.'

describe('component re-exporting', () => {
  const testId = 'test-component'

  it('should render a Button', () => {
    render(<Button data-testid={testId} />)
    expect(screen.getByTestId(testId))
  })
})
