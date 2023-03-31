import { useContextMemoryGame } from '../../context/MemoryGameContext'
import { MemoryGameContext } from '../../models/memoryCard'

export const ScoreBoard = () => {
  const { gameState } = useContextMemoryGame() as MemoryGameContext
  return (
    <div>
      <h1>Score:</h1>
      <div>Correct guesses: {gameState.correctGuesses}</div>
      <div>Wrong guesses: {gameState.wrongGuesses}</div>
      {
        gameState.correctGuesses === 6 &&
        <h2>Well played!</h2>
      }
    </div>
  )
}
