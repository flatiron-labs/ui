import React from 'react'

import { User } from 'phosphor-react'

import { render, screen } from '~/test/utils'
import { InformationSnippet } from '~/components/InformationSnippet'

describe('<InformationSnippet />', () => {
  const testId = 'InformationSnippet'

  it('should render with a column format', () => {
    render(
      <InformationSnippet direction="column" icon={User} title="Full Name" details="John Snow" data-testid={testId} />
    )

    screen.getByRole('presentation') // svg
    screen.getByText('Full Name:')
    screen.getByText('John Snow')

    expect(screen.getByTestId(testId)).toMatchSnapshot()
  })

  it('should render with a row format', () => {
    render(
      <InformationSnippet direction="row" icon={User} title="Full Name" details="John Snow" data-testid={testId} />
    )

    screen.getByRole('presentation') // svg
    screen.getByText('Full Name:')
    screen.getByText('John Snow')

    expect(screen.getByTestId(testId)).toMatchSnapshot()
  })
})
