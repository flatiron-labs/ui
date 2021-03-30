declare module '*.png'
declare module '*.gif'
declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}

type DefaultBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type GetComponentProps<T> = T extends import('react').ComponentType<infer P> | import('react').Component<infer P>
  ? P
  : never

// eslint-disable-next-line @typescript-eslint/ban-types
interface FCWithoutChildren<P = {}> {
  (props: P, context?: unknown): JSX.Element | null
  propTypes?: WeakValidationMap<P>
  contextTypes?: ValidationMap<unknown>
  defaultProps?: Partial<P>
  displayName?: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
interface FC<P = {}> extends FCWithoutChildren {
  (props: PropsWithChildren<P>, context?: unknown): JSX.Element | null
}
