import React from 'react'
import { render, screen } from '@testing-library/react'
import { Layout } from '.'

describe('Layout', () => {
  const text = 'Content'

  const renderComponent = () =>
    render(
      <Layout>
        <p>Content</p>
      </Layout>
    )

  xit('should append the global styles')

  it('should render children', () => {
    renderComponent()
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
