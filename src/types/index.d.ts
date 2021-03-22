import React from 'react'

declare module '*.png'
declare module '*.gif'
declare module '*.svg'

declare global {
  type DefaultBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  type GetComponentProps<T> = T extends React.ComponentType<infer P> | React.Component<infer P> ? P : never
}
