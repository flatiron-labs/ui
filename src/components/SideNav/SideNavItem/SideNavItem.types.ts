export interface SideNavItemProps {
  active?: boolean
  closed?: boolean
  handleClose?(): void
}

export interface StyledProps {
  active?: boolean
}

export interface Props extends SideNavItemProps, StyledProps {
  'data-testid'?: string
  children?: React.ReactNode
}
