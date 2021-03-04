import React from 'react'
import { render, screen } from '@testing-library/react'

import { MainHeader, MainHeaderProps } from '.'

describe('MainHeader', () => {
  const renderComponent = ({ header, subheader, secondarySubheader }: MainHeaderProps) => {
    render(<MainHeader header={header} subheader={subheader} secondarySubheader={secondarySubheader} />)
  }

  it('should render a header', () => {
    renderComponent({ header: 'header', subheader: 'subheader', secondarySubheader: ' Fall 2021' })
    screen.getByText('header')
    screen.getByText('subheader')
    screen.getByText('Fall 2021')
  })
})
