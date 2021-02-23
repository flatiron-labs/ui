import React from 'react'
import { render, screen } from '~/test/utils'

import { MediaCard } from '.'

describe('MediaCard', () => {
  it('should render children', () => {
    render(
      <MediaCard
        image="https://placekeanu.com/318/159/g"
        description="this is information about gradleaders"
        buttonText="View Gradleaders"
        onClick={() => null}
      />
    )

    screen.getByRole('presentation')
    screen.getByText(/this is information about gradleaders/i)
    screen.getByText(/View Gradleaders/)

    expect(document.querySelector('body')).toMatchSnapshot()
  })
})
