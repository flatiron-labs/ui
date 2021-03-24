import React from 'react'
import { render, screen } from '~/test/utils'

import { Button } from '.'

describe('Button', () => {
  const child = 'foo'
  it('should render children', () => {
    render(<Button>{child}</Button>)
    expect(screen.getByText(child)).toMatchSnapshot()
  })

  it('should allow setting of the appearance', () => {
    render(<Button appearance="primary">{child}</Button>)
    expect(screen.getByText(child)).toMatchSnapshot()
  })

  it('should allow setting of the size', () => {
    render(<Button size="medium">{child}</Button>)
    expect(screen.getByText(child)).toMatchSnapshot()
  })

  it('should allow setting of the as prop', () => {
    render(
      <Button as="a" href="https://google.com">
        {child}
      </Button>
    )
    expect(screen.getByText(child)).toMatchSnapshot()
  })
})
