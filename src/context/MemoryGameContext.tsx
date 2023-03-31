import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { GameState, MemoryCard, MemoryGameContext } from '../models/memoryCard'

export const memoryGameContext = React.createContext<MemoryGameContext | null>(null)

export const MemoryGameProvider = (
  { children }: { children: ReactNode }
) => {
  // const [areTwoCardsClicked, setAreTwoCardsClicked] = useState<boolean>(false)
  const [selectedCards, setSelectedCards] = useState<MemoryCard[]>()
  const [gameState, setGameState] = useState<GameState>({ correctGuesses: 0, wrongGuesses: 0 })

  // returns true if the two cards passed are identical
  const compareSelectedCards = (): boolean => {
    return selectedCards![0] === selectedCards![1]
  }

  // this handles the game state changes, when two cards are selected,
  // either increments the "correct guess" or the "wrong guess" counters
  // then resets the selected cards state
  useEffect(() => {
    if (selectedCards?.length === 2) {
      if (compareSelectedCards()) {
        setGameState({
          correctGuesses: gameState.correctGuesses + 1,
          wrongGuesses: gameState.wrongGuesses
        })
        setSelectedCards([])
      } else {
        setGameState({
          correctGuesses: gameState.correctGuesses,
          wrongGuesses: gameState.wrongGuesses + 1
        })
        setSelectedCards([])
      }
    }
  }, [selectedCards])

  return (
    <memoryGameContext.Provider value={{
      selectedCards,
      setSelectedCards,
      gameState
    }}>
      {children}
    </memoryGameContext.Provider>
  )
}

export const useContextMemoryGame = () => { return useContext(memoryGameContext) }
