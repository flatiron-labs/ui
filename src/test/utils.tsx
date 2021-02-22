/* eslint-disable react/require-default-props */

import React, { ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

type Options = RenderOptions & { width: DefaultBreakpoints }

interface Props {
  children: React.ReactNode
  width?: DefaultBreakpoints
}

const Providers = ({ children, width = 'lg' }: Props): ReactElement => {
  const theme = createMuiTheme({
    props: { MuiWithWidth: { initialWidth: width } }
  })

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

const customRender = (ui: ReactElement, options?: Options): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => Providers({ children, width: options?.width }),
    ...options
  })

export * from '@testing-library/react'
export { customRender as render }
