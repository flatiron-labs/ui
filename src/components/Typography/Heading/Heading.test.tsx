import React from 'react'
import { render, screen } from '@testing-library/react'

import { Heading } from '.'
import { Level } from '~/components/Level'

describe('<Heading />', () => {
  it('should render a h1 tag', () => {
    render(<Heading>Foo</Heading>)
    expect(screen.getByText('Foo')).toMatchSnapshot()
  })

  it('should appropriately nest headings', () => {
    render(
      <div data-testid="container">
        <Heading>Heading level 1</Heading>

        <Level>
          <Heading>Heading level 2</Heading>
          <Level>
            <Heading>Heading level 3</Heading>
            <Heading>Heading level 3</Heading>
          </Level>

          <Heading>Heading level 2</Heading>
        </Level>
      </div>
    )

    expect(screen.getByTestId('container')).toMatchSnapshot()
  })
})
