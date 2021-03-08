declare module '*.png'
declare module '*.gif'

declare module '*.svg' {
  const content: unknown
  export default content
}

declare type DefaultBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
