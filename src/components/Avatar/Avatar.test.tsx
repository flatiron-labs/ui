import React from 'react'
import { render, screen } from '~/test/utils'
import { Avatar } from '~/components/Avatar'

describe('<Avatar />', () => {
  const testId = 'test-component'
  const initials = 'JS'

  it('should render appropriate elements', () => {
    render(
      <Avatar data-testid={testId} color="green" backgroundColor="blue">
        {initials}
      </Avatar>
    )

    screen.getByText(initials)
  })
})
