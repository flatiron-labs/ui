import styled from 'styled-components'

const H1 = styled.h1`
  ${props => props.theme.typography?.h1}
`
const H2 = styled.h2`
  ${props => props.theme.typography?.h2}
`
const H3 = styled.h3`
  ${props => props.theme.typography?.h3}
`
const H4 = styled.h4`
  ${props => props.theme.typography?.h4}
`
const H5 = styled.h5`
  ${props => props.theme.typography?.h5}
`
const H6 = styled.h6`
  ${props => props.theme.typography?.h6}
`
const P = styled.p`
  ${props => props.theme.typography?.subtitle1}
`

export { P, H1, H2, H3, H4, H5, H6 }
