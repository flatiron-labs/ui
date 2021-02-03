export type Size = 'sm' | 'md' | 'lg' | undefined

export interface StyleProps {
  primary?: boolean
  size?: Size
}

export interface Props extends StyleProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  'data-testid'?: string
  children?: React.ReactNode
  onClick?(): React.MouseEventHandler<HTMLButtonElement>
}
