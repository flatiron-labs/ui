import React, { createContext, useContext } from 'react'
import { flatironTheme, Theme } from '~/styles/theme'

interface ThemeProviderProps {
  children: React.ReactNode
  theme: Theme
}

export const ThemeContext = createContext<Theme>(flatironTheme)

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    // eslint-disable-next-line no-console
    console.error('The useTheme hook must be used within a ThemeContext.Provider')
  }

  return context
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps): JSX.Element => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
)
