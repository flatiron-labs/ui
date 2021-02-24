import React from 'react'
import { render, screen } from '~/test/utils'

import { ContentCard } from '.'

describe('ContentCard', () => {
  const renderComponent = () => {
    render(
      <ContentCard
        title="Resume"
        description="title_of_resume.pdf"
        cta="Upload"
        legend="Completed: 1.1.1996"
        middleTitle="Assigned"
        middleDescription="1.2.1996"
      />
    )
  }

  it('should render title', () => {
    renderComponent()
    screen.getAllByText(/Resume/i)
  })

  it('should render description', () => {
    renderComponent()
    screen.getByText(/title_of_resume.pdf/i)
  })

  it('should render cta', () => {
    renderComponent()
    screen.getByText(/Upload/i)
  })

  it('should render legend', () => {
    renderComponent()
    screen.getByText(/Completed: 1.1.1996/i)
  })
  it('should render middleTitle', () => {
    renderComponent()
    screen.getByText(/Assigned/i)
  })
  it('should render middleDescription', () => {
    renderComponent()
    screen.getByText(/1.2.1996/i)
  })
})
