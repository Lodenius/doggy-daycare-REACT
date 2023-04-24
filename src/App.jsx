import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import StartPage from './pages/StartPage'
import OurDogs from './pages/OurDogs'
import DogDetails from './pages/DogDetails'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />}/>
        <Route path='/ourdogs' element={<OurDogs />}/>
        <Route path='/dogdetails' element={<DogDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App