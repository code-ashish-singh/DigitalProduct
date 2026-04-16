import react from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Collection from './Pages/Collection'

const App = ()=>{
  return (
    <>
    <Routes>
       <Route path='/' element ={<Home/>}/>
       <Route path='/about' element ={<About/>}/>
       <Route path='/Contact' element ={<Contact/>}/>
       <Route path='/collection' element ={<Collection/>}/>
    </Routes>
    </>
  )
}

export default App