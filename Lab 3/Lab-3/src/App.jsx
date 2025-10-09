import './App.css'
import ColorBoxesContainer from './Components/ColorBoxesContainer'
import colors from './data/data'

function App() {
  return (
    <>
      <div className='App'>
        <ColorBoxesContainer colours={colors}/>
      </div>
    </>
  )
}

export default App
