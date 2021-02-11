export interface SideNavItemProps {
  active?: boolean
  closed?: boolean
  handleClose?(): void
}

export interface Props extends SideNavItemProps {
  'data-testid'?: string
  children?: React.ReactNode
}
