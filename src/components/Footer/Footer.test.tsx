import React from 'react'
import { render, screen } from '~/test/utils'
import { Footer } from '~/components/Footer'

describe('<Footer />', () => {
  it('should render', () => {
    render(<Footer />)
    screen.getByLabelText('Social links')
  })

  it('should render', () => {
    render(<Footer />)
    // expect(screen.queryByLabelText('Social links')).toBeNull()
  })
})
