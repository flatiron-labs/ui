import React from 'react'
import { Button } from '~/index'
import { render, screen } from '~/test/utils'

import { OverlayCard, OverlayCardProps } from '.'
import PinkOverlay from '~/assets/images/overlay-pink.svg'

describe('OverlayCard', () => {
  const renderComponent = (props: Pick<OverlayCardProps, 'cta'>) => {
    render(<OverlayCard title="Try courses" accent="pink" image={PinkOverlay} {...props} />)
  }

  it('should render title', () => {
    renderComponent({ cta: 'View Canvas' })
    screen.getAllByText('Try courses')
  })

  it('should render cta', () => {
    renderComponent({ cta: 'View Canvas' })
    screen.getByText('View Canvas')
  })

  it('should render cta jsx element', () => {
    renderComponent({ cta: <Button>View Canvas Btn</Button> })
    screen.getByText('View Canvas Btn')
  })
})
