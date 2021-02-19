import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { Container } from '.'

describe('Container', () => {
  const text = 'Content'

  const renderComponent = () =>
    render(
      <Container>
        <p>Content</p>
      </Container>
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
