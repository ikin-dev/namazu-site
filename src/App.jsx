import './App.css'
import Decklist from './components/Decklist'
function App() {

  return (
    <>
      <div className='bg-neutral-900 justify-center items-center w-full h-full flex flex-col gap-3 p-5'>
        <Decklist />
      </div>
    </>
  )
}

export default App
