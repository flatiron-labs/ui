import React from 'react'
import { Button } from '~/index'
import { render, screen } from '~/test/utils'

import { OverlayCard, OverlayCardProps } from '.'

describe('OverlayCard', () => {
  const renderComponent = ({ backgroundStyle, cta, title }: OverlayCardProps) => {
    render(<OverlayCard backgroundStyle={backgroundStyle} cta={cta} title={title} />)
  }

  it('should render title', () => {
    renderComponent({ title: 'Try courses', cta: 'View Canvas', backgroundStyle: 'red' })
    screen.getAllByText('Try courses')
  })

  it('should render cta', () => {
    renderComponent({ title: 'Try courses', cta: 'View Canvas', backgroundStyle: 'red' })
    screen.getByText('View Canvas')
  })

  it('should render cta jsx element', () => {
    renderComponent({ title: 'Try courses', cta: <Button>View Canvas</Button>, backgroundStyle: 'red' })
    screen.getByText('View Canvas')
  })
})
