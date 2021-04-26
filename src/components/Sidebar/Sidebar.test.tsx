import React from 'react'
import { render } from '@testing-library/react'
import { Sidebar } from '.'
import { Nav, NavLink, NavLinkTitle } from '~/components'

describe('Sidebar', () => {
  it('should render', () => {
    render(
      <Sidebar expanded>
        <Nav>
          <NavLink href="/">
            <NavLinkTitle>Home</NavLinkTitle>
          </NavLink>
        </Nav>
      </Sidebar>
    )

    // expect(document.querySelector('body')).toMatchSnapshot()
  })
})
