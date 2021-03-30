import React from 'react'
import { render, screen } from '~/test/utils'
import { Button } from '~/components/Button'
import { FileCard } from '~/components/FileCard'

describe('<FileCard />', () => {
  const props = {
    title: 'title_of_resume.pdf',
    cta: 'Upload',
    type: 'Resume',
    secondaryTitle: 'Assigned',
    secondaryDescription: '1.2.1996'
  }

  it('should render appropriate elements', () => {
    render(<FileCard {...props} />)

    screen.getByText(props.title) // Title
    screen.getByText(props.type) // Type
    screen.getByText(props.cta) // CTA
    screen.getByText(props.secondaryTitle) // secondaryTitle
    screen.getByText(props.secondaryDescription) // secondaryDescription
  })

  it('should render cta jsx element', () => {
    render(<FileCard {...props} cta={<Button>{props.cta}</Button>} />)

    screen.getByText(props.title) // Title
    screen.getByText(props.type) // Type
    screen.getByText(props.cta) // CTA Button
    screen.getByText(props.secondaryTitle) // secondaryTitle
    screen.getByText(props.secondaryDescription) // secondaryDescription
  })
})
