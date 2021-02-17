export interface SideNavProps {
  handleClose?(): void
}

export interface StyledProps {
  isOpen: boolean
}

export interface Props extends SideNavProps, StyledProps {
  'data-testid'?: string
  children?: React.ReactNode
}
