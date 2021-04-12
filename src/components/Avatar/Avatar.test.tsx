import React from 'react'
import { render, screen } from '~/test/utils'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/Avatar'

describe('<Avatar />', () => {
  it('should render the image', () => {
    render(
      <Avatar>
        <AvatarImage src="https://picsum.photos/id/1005/400/400" data-testid="image" />
        <AvatarFallback>UI</AvatarFallback>
      </Avatar>
    )

    screen.getByText('UI')
  })

  it('should render the initials', () => {
    render(
      <Avatar>
        <AvatarFallback>UI</AvatarFallback>
      </Avatar>
    )

    screen.getByText('UI')
  })
})
