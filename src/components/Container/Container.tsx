/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-named-default */
import React from 'react'
import { IconContext } from 'phosphor-react'

import { global, theme } from '~/styles/stitches.config'

const globalStyles = global({
  '*': {
    boxSizing: 'border-box'
  },
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
    margin: '0',
    padding: '0',
    border: '0',
    verticalAlign: 'baseline'
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section': {
    display: 'block'
  },
  '*[hidden]': {
    display: 'none'
  },
  body: {
    backgroundColor: '$black500',
    color: '$white500',
    fontFamily: '$firaCode',
    lineHeight: '1'
  },
  'ol, ul': {
    listStyle: 'none'
  },
  'blockquote, q': {
    quotes: 'none'
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
    // @ts-ignore
    content: 'none'
  },
  table: {
    borderSpacing: '0'
  },
  // TODO: Remove in favor of <Heading /> and local styles
  h1: {
    fontFamily: '"Fira Code", sans-serif',
    fontWeight: 300,
    fontSize: '6rem',
    lineHeight: 1.167,
    letterSpacing: '-0.01562em'
  },
  h2: {
    fontFamily: '"Fira Code", sans-serif',
    fontWeight: 300,
    fontSize: '3.75rem',
    lineHeight: 1.2,
    letterSpacing: '-0.00833em'
  },
  h3: {
    fontFamily: '"Fira Code", sans-serif',
    fontWeight: 400,
    fontSize: '3rem',
    lineHeight: 1.167,
    letterSpacing: '0em'
  },
  h4: {
    fontFamily: '"Fira Code", sans-serif',
    fontWeight: 400,
    fontSize: '1.6rem',
    lineHeight: 1.235,
    letterSpacing: '0.00735em'
  },
  h5: {
    fontFamily: '"Fira Code", sans-serif',
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: 1.334,
    letterSpacing: '0em'
  },
  h6: {
    fontFamily: '"Fira Code", sans-serif',
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: 1.6,
    letterSpacing: '0.0075em'
  },
  p: {
    fontFamily: '"Fira Code", sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.75,
    letterSpacing: '0.00938em'
  }
})

export const Container: FC = ({ children }) => {
  globalStyles()

  return (
    <IconContext.Provider
      value={{
        color: 'currentColor',
        size: theme.fontSizes['70'],
        weight: 'regular',
        mirrored: false
      }}
    >
      {children}
    </IconContext.Provider>
  )
}
