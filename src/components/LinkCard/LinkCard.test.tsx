import React from 'react'
import { Button } from '~/index'
import { render, screen } from '~/test/utils'

import { LinkCard, LinkCardProps } from '.'

describe('ContentCard', () => {
  const renderComponent = () => {
    render(<LinkCard backgroundStyle="pink" />)
  }

  it('should render title', () => {
    renderComponent()
    screen.getAllByText('Resume')
  })

  it('should render description', () => {
    renderComponent()
    screen.getByText('title_of_resume.pdf')
  })

  it('should render cta', () => {
    renderComponent()
    screen.getByText('Upload')
  })

  it('should render cta jsx element', () => {
    renderComponent()
    screen.getByText('Upload')
  })

  it('should render legend', () => {
    renderComponent()
    screen.getByText('Completed: 1.1.1996')
  })

  it('should render secondaryTitle', () => {
    renderComponent()
    screen.getByText('Assigned')
  })

  it('should render secondaryDescription', () => {
    renderComponent()
    screen.getByText('1.2.1996')
  })
})
