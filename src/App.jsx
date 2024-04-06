import { Route, Routes } from 'react-router-dom'
import { Contacto, Inicio, NotFound } from './layouts'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
