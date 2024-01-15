
import './App.css'
import Heading from './Heading'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Heading/>
      <div className='Body'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
     
    </>
  )
}

export default App
