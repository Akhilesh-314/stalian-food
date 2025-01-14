import React from 'react'
import { BrowserRouter ,Route,Router, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/error'
import ProtectedRoute from './Component/ProtectedRoute'
import Footer from './Component/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/success' element={<ProtectedRoute element={ <Success/>} />}/>
      <Route path='/*' element={<Error />}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}

export default App
