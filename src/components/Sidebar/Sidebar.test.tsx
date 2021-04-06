import React from 'react'
import { render } from '~/test/utils'
import { Sidebar } from '.'
import { Nav } from '~/components'

describe('Sidebar', () => {
  const renderComponent = () => {
    render(
      <Sidebar expanded>
        <Nav.Root>
          <Nav.Link href="/">
            <Nav.Title>Home</Nav.Title>
          </Nav.Link>
        </Nav.Root>
      </Sidebar>
    )
  }

  it('should render', () => {
    renderComponent()
    expect(document.querySelector('body')).toMatchSnapshot()
  })
})
