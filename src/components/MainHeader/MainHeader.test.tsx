import React from 'react'
import { render, screen } from '@testing-library/react'

import { MainHeader, MainHeaderProps } from '.'

describe('MainHeader', () => {
  const renderComponent = ({ header, subheader, date }: MainHeaderProps) => {
    render(<MainHeader header={header} subheader={subheader} date={date} />)
  }

  it('should render a header', () => {
    renderComponent({ header: 'header', subheader: 'subheader', date: ' Fall 2021' })
    screen.getAllByText(/header/i)
  })

  it('should render a subheader', () => {
    renderComponent({ header: 'header', subheader: 'subheader', date: ' Fall 2021' })
    screen.getAllByText(/subheader/i)
  })
})
