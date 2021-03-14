import React, { createContext, useContext } from 'react'

type LevelProps = {
  children: React.ReactNode
  value?: number
}

export const LevelContext = createContext(1)
export const useLevel = (): number => useContext(LevelContext)

export const Level = ({ children, value }: LevelProps): JSX.Element => {
  const contextLevel = useContext(LevelContext)
  const level = value ?? contextLevel + 1

  return <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
}
