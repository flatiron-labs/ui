import React from 'react'
import { render, screen } from '@testing-library/react'
import { PageHeading } from '~/components/PageHeading'

describe('<PageHeading  />', () => {
  const title = 'title'
  const subtitle = 'subtitle'
  const secondarySubtitle = 'secondarySubtitle'

  it('should render all elements', () => {
    render(<PageHeading title={title} subtitle={subtitle} secondarySubtitle={secondarySubtitle} />)

    screen.getByText(title)
    screen.getByText(subtitle)
    screen.getByText(secondarySubtitle)
  })

  it('should render just the title', () => {
    render(<PageHeading title={title} />)

    screen.getByText(title)
    // expect(screen.queryByText(subtitle)).not.toBeInTheDocument()
    // expect(screen.queryByText(secondarySubtitle)).not.toBeInTheDocument()
  })

  it('should render just the title, subtitle', () => {
    render(<PageHeading title={title} subtitle={subtitle} />)

    screen.getByText(title)
    screen.getByText(subtitle)
    // expect(screen.queryByText(secondarySubtitle)).not.toBeInTheDocument()
  })

  it('should render just the title, secondarySubtitle', () => {
    render(<PageHeading title={title} secondarySubtitle={secondarySubtitle} />)

    screen.getByText(title)
    // expect(screen.queryByText(subtitle)).not.toBeInTheDocument()
    screen.getByText(secondarySubtitle)
  })
})
