interface SideNavProps {
  closed?: boolean
  handleClose?(): void
}

interface Props extends SideNavProps {
  'data-testid'?: string
  children?: React.ReactNode
}

export default Props
