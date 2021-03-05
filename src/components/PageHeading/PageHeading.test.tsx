import React from 'react'
import { render, screen } from '@testing-library/react'

import { PageHeading, PageHeadingProps } from '.'

describe('PageHeading', () => {
  const renderComponent = ({ header, subheader, secondarySubheader }: PageHeadingProps) => {
    render(<PageHeading header={header} subheader={subheader} secondarySubheader={secondarySubheader} />)
  }

  it('should render a header', () => {
    renderComponent({ header: 'header', subheader: 'subheader', secondarySubheader: ' Fall 2021' })
    screen.getByText('header')
    screen.getByText('subheader')
    screen.getByText('Fall 2021')
  })
})
