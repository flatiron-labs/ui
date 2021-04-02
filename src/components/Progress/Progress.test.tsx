import React from 'react'
import { render, screen } from '~/test/utils'
import { Progress } from '.'

const testId = 'Progress'

describe('OverlayCard', () => {
  const renderComponent = () => {
    render(<Progress label="Tasks complete" data-testid={testId} />)
  }

  it('should render', () => {
    renderComponent()
    expect(screen.getByTestId(testId)).toMatchSnapshot()
  })

  it('should render label', () => {
    renderComponent()
    expect(screen.getAllByText('Tasks complete')).toMatchSnapshot()
  })
})
