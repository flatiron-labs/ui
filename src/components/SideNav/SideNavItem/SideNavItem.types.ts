interface SideNavItemProps {
  active?: boolean
  closed?: boolean
  handleClose?(): void
}

interface Props extends SideNavItemProps {
  'data-testid'?: string
  children?: React.ReactNode
}

export default Props
