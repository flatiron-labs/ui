import React from 'react'
import { Button } from '~/index'
import { render, screen } from '~/test/utils'

import { FileCard, FileCardProps } from '.'

describe('FileCard', () => {
  const renderComponent = ({ cta, title, type }: FileCardProps) => {
    render(<FileCard title={title} type={type} secondaryTitle="Assigned" cta={cta} secondaryDescription="1.2.1996" />)
  }

  it('should render type/legend', () => {
    renderComponent({ cta: 'Upload', title: 'title_of_resume.pdf', type: 'Resume' })
    screen.getAllByText('Resume')
  })

  it('should render description', () => {
    renderComponent({ cta: 'Upload', title: 'title_of_resume.pdf', type: 'Resume' })
    screen.getByText('title_of_resume.pdf')
  })

  it('should render cta', () => {
    renderComponent({ cta: 'Upload', title: 'title_of_resume.pdf', type: 'Resume' })
    screen.getByText('Upload')
  })

  it('should render cta jsx element', () => {
    renderComponent({ cta: <Button>Upload</Button>, title: 'title_of_resume.pdf', type: 'Resume' })
    screen.getByText('Upload')
  })

  it('should render secondaryTitle', () => {
    renderComponent({ cta: 'Upload', title: 'title_of_resume.pdf', type: 'Resume' })
    screen.getByText('Assigned')
  })

  it('should render secondaryDescription', () => {
    renderComponent({ cta: 'Upload', title: 'title_of_resume.pdf', type: 'Resume' })
    screen.getByText('1.2.1996')
  })
})
