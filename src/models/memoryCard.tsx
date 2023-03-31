export type MemoryCard = {
  img: string,
  id: number
}

export type GameState = {
  correctGuesses: number,
  wrongGuesses: number
}

export type MemoryGameContext = {
  selectedCards: MemoryCard[] | undefined,
  setSelectedCards: React.Dispatch<React.SetStateAction<MemoryCard[] | undefined>>,
  gameState: GameState
}