import React from 'react'
import { Grid } from '~/index'
import { render, screen } from '~/test/utils'

import { MediaCard, MediaCardProps } from '.'

const imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU'

describe('Button', () => {
  const renderComponent = ({ src, children }: MediaCardProps) => {
    render(
      <Grid container spacing={3}>
        <MediaCard src={src}>{children}</MediaCard>
      </Grid>
    )
  }

  it('should render children', () => {
    renderComponent({ children: <p>foo</p>, src: imgSrc })
    screen.getByText(/foo/i)
  })
})
