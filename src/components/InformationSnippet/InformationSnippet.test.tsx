import React from 'react'
import { render } from '~/test/utils'
import { InformationSnippet, InformationSnippetProps } from '.'

describe('InformationSnippet', () => {
  const renderComponent = (props: InformationSnippetProps) => {
    render(<InformationSnippet {...props} />)
  }

  it('should render', () => {
    renderComponent({ icon: 'User', title: 'Full Name', details: 'John Snow' })
    expect(document.querySelector('body')).toMatchSnapshot()
  })
})
