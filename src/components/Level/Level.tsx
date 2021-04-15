import React, { createContext, useContext } from 'react'

type Props = {
  value?: number
}

export const LevelContext = createContext(1)
LevelContext.displayName = 'LevelContext'

export const useLevel = (): number => useContext(LevelContext)

export const Level: FC<Props> = ({ children, value }) => {
  const contextLevel = useContext(LevelContext)
  const level = value ?? contextLevel + 1

  return <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
}
