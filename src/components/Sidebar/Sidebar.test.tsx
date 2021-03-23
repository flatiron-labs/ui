import React from 'react'
import { render } from '~/test/utils'
import { Sidebar } from '.'
import { NavLink, NavContainer } from '~/components'

describe('Sidebar', () => {
  const renderComponent = () => {
    render(
      <Sidebar expanded>
        <NavContainer>
          <NavLink href="/" icon="Home">
            Home
          </NavLink>
        </NavContainer>
      </Sidebar>
    )
  }

  it('should render', () => {
    renderComponent()
    expect(document.querySelector('body')).toMatchSnapshot()
  })
})
