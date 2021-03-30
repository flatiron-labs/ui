import React from 'react'
import { render, screen } from '~/test/utils'
import { Section } from '~/components/Section'

describe('<Section />', () => {
  it('should render children', () => {
    render(
      <Section title="Personal Information">
        <p>foo</p>
      </Section>
    )
    screen.getByText(/foo/i)
  })
})
