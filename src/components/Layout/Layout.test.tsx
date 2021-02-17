import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { Layout } from '.'

describe('Layout', () => {
  const text = 'Content'

  const renderComponent = () =>
    render(
      <Layout>
        <p>Content</p>
      </Layout>
    )

  it('should append the global styles', async () => {
    renderComponent()

    await waitFor(() => {
      expect(document.querySelector('style[data-styled="active"]')).toMatchSnapshot()
    })
  })

  it('should render children', () => {
    renderComponent()
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
