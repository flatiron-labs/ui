import React from 'react'
import { render, screen } from '~/test/utils'
import { InformationSnippet, InformationSnippetProps } from '.'

describe('InformationSnippet', () => {
  const renderComponent = (props: InformationSnippetProps) => {
    render(<InformationSnippet {...props} />)
  }

  it('should render title', () => {
    renderComponent({ icon: 'User', title: 'Full Name', details: 'John Snow' })
    screen.getByText('Full Name:')
  })

  it('should render details', () => {
    renderComponent({ icon: 'User', title: 'Full Name', details: 'John Snow' })
    screen.getByText('John Snow')
  })

  it('should render cta jsx element', () => {
    renderComponent({ icon: 'User', title: 'Full Name', details: 'John Snow' })
    screen.getAllByRole('presentation')
  })
})
