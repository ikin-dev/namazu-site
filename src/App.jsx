import './App.css'
import Decklist from './components/Decklist'
import Header from './components/Header'
import Navbar from './components/navbar'
import HomePage from './pages/HomePage'
import DecksPage from './pages/DecksPage'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/decks" element={<DecksPage />} />
      </Routes>
    </div>
  )
}


export default App
