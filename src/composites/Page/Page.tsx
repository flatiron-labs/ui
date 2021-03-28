import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
import { Grid, Footer, Sidebar, Media, NavContainer, NavLink } from '~/index' // Intentionally using the root index.ts
=======
import { Grid, Footer, Sidebar, Media } from '~/index' // Intentionally using the root index.ts
>>>>>>> be27bd4 (feat(overlaycard): use stitches)

export interface PageProps {
  children: JSX.Element[]
  style?: React.CSSProperties
}

const StyledContent = styled(props => <Grid container item {...props} />)`
  align-items: flex-start;
  align-content: flex-start;
  padding: 62px 30px 62px 40px;

  ${Media.md} {
    padding-left: 300px;
  }
`

<<<<<<< HEAD
export const Page = ({ children, ...props }: PageProps): JSX.Element => (
  <Grid item {...props}>
    <Grid container style={{ minHeight: '100vh' }}>
      <Grid container wrap="nowrap" style={{ paddingBottom: '40px' }}>
        <Sidebar expanded>
          <NavContainer>
            <NavLink href="/" icon="Home">
              Home
            </NavLink>
            <NavLink href="/profile" icon="User">
              Profile
            </NavLink>
            <NavLink href="/settings" icon="Settings">
              Settings
            </NavLink>
          </NavContainer>
        </Sidebar>
        <Grid item>
          <StyledContent>{children}</StyledContent>
=======
export const Page = ({ children, ...props }: PageProps): JSX.Element => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const handleOnExpand = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <Grid item {...props}>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid container wrap="nowrap" style={{ paddingBottom: '40px' }}>
          <Sidebar
            onExpand={handleOnExpand}
            expanded={sidebarExpanded}
            xs={sidebarExpanded === true ?? 2}
            sm={sidebarExpanded === true ?? 1}
            md={2}
          />

          <Grid item xs={sidebarExpanded === true ? 5 : true} sm={sidebarExpanded === true ? 5 : true}>
            <StyledContent sidebarExpanded={sidebarExpanded}>{children}</StyledContent>
          </Grid>
>>>>>>> be27bd4 (feat(overlaycard): use stitches)
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  </Grid>
)
