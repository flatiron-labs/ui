/* eslint-disable react/require-default-props */

import React from 'react'
import { styled } from '~/styles/stitches.config'

interface Props {
  title: string
  subtitle?: string | false
  secondarySubtitle?: string | false
}

const Title = styled('h1', {
  fontSize: '2.5rem'
})

const Highlight = styled('span', {
  color: '$yellow500',
  display: 'inline-block',
  paddingRight: '25px'
})

export const PageHeading = ({ title, subtitle, secondarySubtitle }: Props): JSX.Element => (
  <div>
    <Title>{title}</Title>

    {(subtitle || secondarySubtitle) && (
      <h5>
        {subtitle && <Highlight>{subtitle}</Highlight>}
        {secondarySubtitle}
      </h5>
    )}
  </div>
)
