import React from 'react'
import { render, screen } from '~/test/utils'
import { Footer } from '~/components/Footer'

describe('<Footer />', () => {
  it('should render', () => {
    render(<Footer.Root />)
    screen.getByLabelText('Social links')
  })

  it('should render', () => {
    render(<Footer.Root />)
    expect(screen.queryByLabelText('Social links')).toBeNull()
  })
})
