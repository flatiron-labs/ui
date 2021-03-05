import styled from 'styled-components'
import { Font } from '~/styles'

interface HeadingProps {
  fontSize?: string
}

const base = {
  header: `
    font-family: ${Font.firaCode}, monospace;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  `
}
const H1 = styled.h1`
  ${base.header}
  font-size: 1.65rem;
`
const H2 = styled.h2<HeadingProps>`
  ${base.header}
  font-size: ${props => (props.fontSize ? props.fontSize : '3.3rem')};
`
const H3 = styled.h3<HeadingProps>`
  ${base.header}
  font-size: ${props => (props.fontSize ? props.fontSize : '1.65rem')};
`
const H4 = styled.h4<HeadingProps>`
  ${base.header}
  font-size: ${props => (props.fontSize ? props.fontSize : '1.2rem')};
`
const P = styled.p`
  font-family: ${Font.firaCode}, monospace;
  font-size: 1rem;
  margin-top: 5px;
  margin-bottom: 5px;
`
export { P, H1, H2, H3, H4 }
