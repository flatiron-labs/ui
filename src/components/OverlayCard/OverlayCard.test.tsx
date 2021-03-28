import React from 'react'
import { Button } from '~/index'
import { render, screen } from '~/test/utils'

import { OverlayCard } from '.'
import PinkOverlay from '~/assets/images/overlay-pink.svg'

describe('OverlayCard', () => {
  const props: GetComponentProps<typeof OverlayCard> = {
    title: 'Try courses',
    accentColor: '$pink500',
    image: PinkOverlay
  }

  it('should render title & cta', () => {
    render(<OverlayCard {...props} cta="View Canvas" />)
    screen.getAllByText('Try courses')
    screen.getByText('View Canvas')
  })

  it('should render cta jsx element', () => {
    const text = 'View Canvas Btn'

    render(<OverlayCard {...props} cta={<Button>${text}</Button>} />)
    screen.getByText(text)
  })
})
