declare module '*.png'
declare module '*.gif'

declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}

declare type DefaultBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
