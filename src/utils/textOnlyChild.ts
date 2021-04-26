import { Children, ReactNode } from 'react'

// Checks if there's only one child and if that child is a string
export const textOnlyChild = (children: ReactNode): boolean =>
  Children.count(children) === 1 && typeof children === 'string'

// Checks if there's only one child and if that child is a string
// Throws an error if there's more than one child
export const textOnlyChildStrict = (children: ReactNode): boolean =>
  Children.only(children) === 1 && typeof children === 'string'
