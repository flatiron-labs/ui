import React from 'react'
import { render, screen } from '@testing-library/react'
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

// describe('<Section />', () => {
//   it('should render children', () => {
//     render(
//       <Section>
//         <Section.Title>Personal Information</SectionTitle>
//         <Section.Content>
//           <p>foo</p>
//         </Section.Content>
//       </Section>
//     )
//     screen.getByText(/foo/i)
//   })
// })
