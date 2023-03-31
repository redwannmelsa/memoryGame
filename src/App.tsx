import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MemoryGame } from './pages/MemoryGame'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/memory" element={<MemoryGame />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
