export interface SideNavProps {
  closed?: boolean
  handleClose?(): void
}

export interface StyledProps {
  isMobile: boolean
  mobileOpen: boolean
}

export interface Props extends SideNavProps, StyledProps {
  'data-testid'?: string
  children?: React.ReactNode
}
