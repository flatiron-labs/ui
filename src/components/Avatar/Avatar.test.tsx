import React from 'react'
import { render, screen } from '~/test/utils'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/Avatar'

describe('Avatar', () => {
  const initials = 'UI'

  it('should render appropriate elements', () => {
    render(
      <Avatar>
        <AvatarImage src="https://picsum.photos/id/1005/400/400" />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
    )

    screen.getByText(initials)
  })
})
