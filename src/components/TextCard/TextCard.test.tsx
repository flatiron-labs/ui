import React from 'react'
import { render, screen } from '~/test/utils'
import { TextCard } from '~/components/TextCard'

describe('<TextCard />', () => {
  const label = 'Course:'
  const value = 'Software Engineering'

  it('should render elements', () => {
    render(<TextCard label={label} value={value} />)

    screen.getByText(label)
    screen.getByText(value)
  })
})
