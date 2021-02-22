/* eslint-disable @typescript-eslint/no-empty-function, no-restricted-globals */

import mediaQuery from 'css-mediaquery'

export const createMatchMedia = (width: number) => (query: string): MediaQueryList => ({
  matches: mediaQuery.match(query, { width }),
  addListener: () => {},
  removeListener: () => {},
  onchange: () => {},
  addEventListener,
  removeEventListener,
  dispatchEvent,
  media: null
})

test.atWidth = (width: number, name: string, fn?: jest.ProvidesCallback, timeout?: number) => {
  const prev = window.matchMedia

  window.matchMedia = createMatchMedia(width)
  const res = test(name, fn, timeout)

  window.matchMedia = prev
  return res
}
