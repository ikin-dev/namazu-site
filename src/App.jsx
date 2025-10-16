import './App.css'
import Decklist from './components/Decklist'
import Header from './components/Header'
import Navbar from './components/navbar'
function App() {

  return (
    <>
      <div className='bg-neutral-900 justify-center items-center w-full h-full flex flex-col'>
        <Navbar />
        <Header />
        <Decklist />
      </div>
    </>
  )
}

export default App
