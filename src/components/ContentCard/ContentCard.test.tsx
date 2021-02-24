import React from 'react'
import { Button } from '~/index'
import { render, screen } from '~/test/utils'

import { ContentCard, ContentCardProps } from '.'

describe('ContentCard', () => {
  const renderComponent = ({ cta, title, description }: ContentCardProps) => {
    render(
      <ContentCard
        title={title}
        description={description}
        legend="Completed: 1.1.1996"
        secondaryTitle="Assigned"
        cta={cta}
        secondaryDescription="1.2.1996"
      />
    )
  }

  it('should render title', () => {
    renderComponent({ cta: 'Upload', description: 'title_of_resume.pdf', title: 'Resume' })
    screen.getAllByText('Resume')
  })

  it('should render description', () => {
    renderComponent({ cta: 'Upload', description: 'title_of_resume.pdf', title: 'Resume' })
    screen.getByText('title_of_resume.pdf')
  })

  it('should render cta', () => {
    renderComponent({ cta: 'Upload', description: 'title_of_resume.pdf', title: 'Resume' })
    screen.getByText('Upload')
  })

  it('should render cta jsx element', () => {
    renderComponent({ cta: <Button>Upload</Button>, description: 'title_of_resume.pdf', title: 'Resume' })
    screen.getByText('Upload')
  })

  it('should render legend', () => {
    renderComponent({ cta: 'Upload', description: 'title_of_resume.pdf', title: 'Resume' })
    screen.getByText('Completed: 1.1.1996')
  })
  it('should render secondaryTitle', () => {
    renderComponent({ cta: 'Upload', description: 'title_of_resume.pdf', title: 'Resume' })
    screen.getByText('Assigned')
  })
  it('should render secondaryDescription', () => {
    renderComponent({ cta: 'Upload', description: 'title_of_resume.pdf', title: 'Resume' })
    screen.getByText('1.2.1996')
  })
})
