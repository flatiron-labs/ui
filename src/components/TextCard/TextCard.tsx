import React from 'react'
import { styled } from '~/styles/stitches.config'

interface Props extends Partial<typeof Container> {
  label: string
  value: string
}

const Container = styled('div', {
  border: '2px solid $cyan500',
  padding: '10px'
})

const Title = styled('h4', {
  color: '$cyan500'
})

export const TextCard: FCWithoutChildren<Props> = ({ label, value, ...props }) => (
  <Container {...props}>
    <Title>{label}</Title>
    <p>{value}</p>
  </Container>
)
