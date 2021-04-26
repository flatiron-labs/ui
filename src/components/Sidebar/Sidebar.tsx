import { styled } from '~/styles/stitches.config'

/* -------------------------------------------------------------------------------------------------
 * Sidebar
 * -----------------------------------------------------------------------------------------------*/

<<<<<<< HEAD
const StyledSidebar = styled.div<StyledLinkProps>`
  background-color: ${props => props.theme.colors.common.black};
  min-height: 99%;
  flex-direction: column;
  border-right: 1px ${props => props.theme.colors.common.greyDarkest} solid;
  position: absolute;
  z-index: 555;
=======
export const Sidebar = styled('aside', {
  backgroundColor: '$black500',
  borderRight: '1px solid $grey1000',
  flexDirection: 'column',
  minHeight: '99%',
  overflowX: 'auto',
  padding: '30px 0 0 0',
  position: 'absolute',
  transition: 'width 150ms, height 150ms, transform 150ms ease-in-out',
  zIndex: 555,
>>>>>>> 63ce827 (feat: complete overhaul of components and styles)

  variants: {
    expanded: {
      true: {
        width: '250px'
      },
      false: {
        width: '0px'
      }
    }
  }

  // ${Media.md} {
  //   width: 250px !important;
  //   display: flex !important;
  // }
})

Sidebar.displayName = 'Sidebar'
