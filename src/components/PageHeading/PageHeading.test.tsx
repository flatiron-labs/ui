import React from 'react'
import { render, screen } from '@testing-library/react'

import { PageHeading, PageHeadingProps } from '.'

describe('PageHeading', () => {
  const renderComponent = ({ title, subtitle, secondarySubtitle }: PageHeadingProps) => {
    render(<PageHeading title={title} subtitle={subtitle} secondarySubtitle={secondarySubtitle} />)
  }

  it('should render all elements', () => {
    renderComponent({ title: 'title', subtitle: 'subtitle', secondarySubtitle: 'secondarySubtitle' })

    screen.getByText('title')
    screen.getByText('subtitle')
    screen.getByText('secondarySubtitle')
  })

  it('should render just the title', () => {
    renderComponent({ title: 'title' })

    screen.getByText('title')
  })

  it('should render just the title, subtitle', () => {
    renderComponent({ title: 'title', subtitle: 'subtitle' })

    screen.getByText('title')
    screen.getByText('subtitle')
  })

  it('should render just the title, secondarySubtitle', () => {
    renderComponent({ title: 'title', secondarySubtitle: 'secondarySubtitle' })

    screen.getByText('title')
    screen.getByText('secondarySubtitle')
  })
})
