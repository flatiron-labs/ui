import React from 'react'
import { render, screen } from '~/test/utils'

import { MediaCard } from '.'

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
        onClick={() => null}
      />
    )

    screen.getByText('Canvas')
    screen.getByText('this is information about gradleaders')
    screen.getByText('View')

    expect(document.querySelector('body')).toMatchSnapshot()
  })

  it('should pass ref to cta', () => {
    const ref = React.createRef<HTMLAnchorElement>()

    render(
      <MediaCard
        image="https://placekeanu.com/318/159/g"
        title="Canvas"
        description="this is information about gradleaders"
        cta="View"
        href={link}
        ref={ref}
      />
    )

    expect(ref.current.href).toEqual(link)
  })
})
