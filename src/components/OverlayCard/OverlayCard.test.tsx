import React from 'react'
import { render, screen } from '~/test/utils'
import { OverlayCard } from '~/components/OverlayCard'
import PinkOverlay from '~/assets/images/overlay-pink.svg'

describe('<OverlayCard />', () => {
  it('should render title & cta', () => {
    const title = 'Try courses'
    const cta = 'View Canvas'

    render(<OverlayCard title={title} accentColor="$pink500" image={PinkOverlay} cta={cta} />)

    screen.getAllByText(title)
    screen.getByText(cta)
  })
})
