import './App.css'
import Portfolio from './components/Portfolio/Portfolio'
import imageArr from './data/image.js'


function App() {
  return (
    <>
      <Portfolio data={imageArr}/>
    </>
  )
}

export default App
