import React, { useEffect, useState } from 'react'
import { MemoryCard } from '../../models/memoryCard'
import { shuffle } from '../../utils/utils'
import { Card } from './Card'

export const GameBoard = () => {

  const [gameCardsArray, setGameCardsArray] = useState<MemoryCard[]>()

  // setting the game cards array on new instance of this component
  useEffect(() => {
    const numberOfCards: number = 6
    const preShuffledSingleArray: MemoryCard[] = Array(numberOfCards).fill(0).map((_, i) => (
      {
        img: `shrek${i + 1}`,
        id: i + 1
      }
    ))
    const preShuffledDoublesArray: MemoryCard[] = preShuffledSingleArray.reduce((m: MemoryCard[], i) => m.concat([i, i]), [])

    setGameCardsArray(shuffle(preShuffledDoublesArray))
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {
        gameCardsArray?.map((card, index) => (
          <Card key={index} card={card} />
        ))
      }
    </div >
  )
}
