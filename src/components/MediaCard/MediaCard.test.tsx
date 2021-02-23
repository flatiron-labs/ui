import React from 'react'
import { render, screen } from '~/test/utils'

import { MediaCard } from '.'

describe('MediaCard', () => {
  it('should render children', () => {
    render(
      <MediaCard
        image="https://placekeanu.com/318/159/g"
        title="Canvas"
        description="this is information about gradleaders"
        buttonText="View Gradleaders"
        onClick={() => null}
      />
    )

    screen.getByAltText('')
    screen.getByText(/Canvas/)
    screen.getByText(/this is information about gradleaders/)
    screen.getByText(/View Gradleaders/)

    expect(document.querySelector('body')).toMatchSnapshot()
  })

  it('should render a custom image element', () => {
    render(
      <MediaCard
        image={<img src="https://placekeanu.com/318/159/g" alt="" role="presentation" />}
        title="Canvas"
        description="this is information about gradleaders"
        buttonText="View Gradleaders"
        onClick={() => null}
      />
    )

    screen.getByText(/Canvas/)
    screen.getByRole('presentation')
    screen.getByText(/this is information about gradleaders/)
    screen.getByText(/View Gradleaders/)

    expect(document.querySelector('body')).toMatchSnapshot()
  })
})
