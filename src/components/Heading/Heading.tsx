import styled from 'styled-components'
import { Font } from '~/styles'

const base = {
  header: `
    font-family: ${Font.firaCode}, monospace;
    font-weight: bold;
  `
}
const H1 = styled.h1`
  ${base.header}
  font-size: 5.45rem;
`
const H2 = styled.h2`
  ${base.header}
  font-size: 3.3rem;
`
const H3 = styled.h3`
  ${base.header}
  font-size: 1.65rem;
`
const H4 = styled.h4`
  ${base.header}
  font-size: 1.2rem;
`
const P = styled.p`
  ...
`
export { P, H1, H2, H3, H4 }
