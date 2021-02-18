import React from 'react'
import { render, screen } from '@testing-library/react'
import { Spinner, SpinnerProps } from '.'

describe('SideNav', () => {
  const altText = 'loading indicator'

  const renderComponent = (props?: SpinnerProps) => {
    render(<Spinner {...props} />)
  }

  it('should render the component', () => {
    renderComponent()
    screen.getByAltText(altText)
  })

  it('should render with alt text', () => {
    const alt = 'Data loading indicator'
    renderComponent({ alt })
    expect(screen.getByAltText(alt)).toMatchSnapshot()
  })

  it('should render with styles', () => {
    renderComponent({ style: { padding: '10px' } })
    expect(screen.getByAltText(altText)).toMatchSnapshot()
  })
})
