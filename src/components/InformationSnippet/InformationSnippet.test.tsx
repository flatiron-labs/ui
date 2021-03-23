import React from 'react'
import { render, screen } from '~/test/utils'
import { InformationSnippet } from '.'

describe('InformationSnippet', () => {
  it('should render', () => {
    const testId = 'InformationSnippet'

    render(<InformationSnippet icon="User" title="Full Name" details="John Snow" data-testid={testId} />)
    expect(screen.getByTestId(testId)).toMatchSnapshot()
  })
})
