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
