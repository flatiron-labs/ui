import React from 'react'
import { render } from '~/test/utils'
import { Sidebar } from '.'
import { FlatironLogo, NavLink, NavLinkContainer } from '~/components'

describe('Sidebar', () => {
  const renderComponent = () => {
    render(
      <Sidebar expanded>
        <div>
          <FlatironLogo />
        </div>
        <NavLinkContainer>
          <NavLink href="/" icon="Home">
            Home
          </NavLink>
          <NavLink href="/profile" icon="User">
            Profile
          </NavLink>
          <NavLink href="/settings" icon="Settings">
            Settings
          </NavLink>
        </NavLinkContainer>
      </Sidebar>
    )
  }

  it('should render', () => {
    renderComponent()
    expect(document.querySelector('body')).toMatchSnapshot()
  })
})
