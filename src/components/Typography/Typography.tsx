import styled from 'styled-components'
import { Font } from '~/styles'

const base = {
  header: `
    font-family: ${Font.firaCode}, monospace;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  `
}
const H1 = styled.h1<{ fontSize?: string }>`
  ${base.header}
  font-size: ${props => (props.fontSize ? props.fontSize : '5.45rem')};
`
const H2 = styled.h2<{ fontSize?: string }>`
  ${base.header}
  font-size: ${props => (props.fontSize ? props.fontSize : '3.3rem')};
`
const H3 = styled.h3<{ fontSize?: string }>`
  ${base.header}
  font-size: ${props => (props.fontSize ? props.fontSize : '1.65rem')};
`
const H4 = styled.h4<{ fontSize?: string }>`
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
