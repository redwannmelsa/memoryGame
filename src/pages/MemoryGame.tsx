import { GameBoard } from '../component/memory-game/GameBoard'
import { ScoreBoard } from '../component/memory-game/ScoreBoard'
import { MemoryGameProvider } from '../context/MemoryGameContext'

export const MemoryGame = () => {
  return (
    <div>
      <MemoryGameProvider>
        <GameBoard />
        <ScoreBoard />
      </MemoryGameProvider>
    </div>
  )
}
