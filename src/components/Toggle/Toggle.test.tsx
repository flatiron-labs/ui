import React from 'react'
import { render, screen } from '~/test/utils'
import { Toggle } from '~/components/Toggle'

describe('<Toggle />', () => {
  const testId = 'test-component'
  const label = 'Test label'

  it('should render a toggle', () => {
    render(<Toggle data-testid={testId} />)
    screen.getByTestId(testId)
  })

  it('should render a toggle with label', () => {
    render(<Toggle data-testid={testId} label={label} />)
    screen.getByText(label)
  })
})
