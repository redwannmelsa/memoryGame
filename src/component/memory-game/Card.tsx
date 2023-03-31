import React, { useContext, useEffect, useState } from 'react'
import { useContextMemoryGame } from '../../context/MemoryGameContext'
import { MemoryCard, MemoryGameContext } from '../../models/memoryCard'


export const Card = (
  { card }: { card: MemoryCard }
) => {

  const { selectedCards, setSelectedCards, gameState } = useContextMemoryGame() as MemoryGameContext

  const [isCardClicked, setIsCardClicked] = useState<boolean>(false)
  const [isCardSolved, setIsCardSolved] = useState<boolean>(false)

  const cardSelectionHandler = () => {
    setIsCardClicked(true)
    !selectedCards ? setSelectedCards([card]) : setSelectedCards([...selectedCards, card])
  }

  useEffect(() => {
    setTimeout(() => {
      setIsCardClicked(false)
    }, 1000)
  }, [gameState.wrongGuesses])

  useEffect(() => {
    if (isCardClicked) {
      console.log('this runs')
      setIsCardSolved(true)
    }
  }, [gameState.correctGuesses])

  return (
    <div
      style={{
        height: '200px',
        width: '150px',
        margin: '10px',
        backgroundColor: 'whitesmoke'
      }}
      onClick={() => !isCardSolved ? cardSelectionHandler() : null}
    >
      <img src={isCardSolved ?
        card.img + '.png' :
        isCardClicked ?
          card.img + '.png' :
          'vite.svg'
      } alt="" style={{
        width: '150px',
        height: '200px'
      }} />
    </div>
  )
}
