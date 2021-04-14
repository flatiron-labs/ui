import React from 'react'
import { renderHook } from '@testing-library/react-hooks/pure'

import { Level, useLevel } from '.'

describe('<Level />', () => {
  describe('without a provider', () => {
    it('should default to 1', () => {
      const { result } = renderHook(() => useLevel())

      expect(result.current).toBe(1)
    })
  })

  describe('nested', () => {
    it('should set the current level to 2', () => {
      const wrapper = ({ children }) => <Level>{children}</Level>
      const { result } = renderHook(() => useLevel(), { wrapper })

      expect(result.current).toBe(2)
    })
  })

  describe('can set initial value', () => {
    it('should set the current level to 4', () => {
      const wrapper = ({ children }) => (
        <Level value="3">
          <Level>{children}</Level>
        </Level>
      )
      const { result } = renderHook(() => useLevel(), { wrapper })

      expect(result.current).toBe(4)
    })
  })

  describe('nested multiple times', () => {
    it('should set the current level to 3', () => {
      const wrapper = ({ children }) => (
        <Level>
          <Level>{children}</Level>
        </Level>
      )
      const { result } = renderHook(() => useLevel(), { wrapper })

      expect(result.current).toBe(3)
    })
  })
})
