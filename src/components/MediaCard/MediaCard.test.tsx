import React from 'react'
import { render, screen } from '~/test/utils'
import { MediaCard } from '~/components/MediaCard'

describe('<MediaCard />', () => {
  const link = 'http://localhost/'

  it('should render children', () => {
    render(
      <MediaCard
        image="https://placekeanu.com/318/159/g"
        title="Canvas"
        description="this is information about gradleaders"
        cta="View"
        href={link}
      />
    )

    screen.getByText('Canvas')
    screen.getByText('this is information about gradleaders')
    screen.getByText('View')

    // expect(document.querySelector('body')).toMatchSnapshot()
  })
})
