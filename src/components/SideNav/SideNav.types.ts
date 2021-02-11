export interface SideNavProps {
  closed?: boolean
  handleClose?(): void
}

export interface Props extends SideNavProps {
  'data-testid'?: string
  children?: React.ReactNode
}
