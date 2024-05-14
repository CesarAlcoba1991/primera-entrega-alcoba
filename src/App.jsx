import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Tortas from './components/Tortas'
import Porciones from './components/Porciones'
import Cupcake from './components/Cupcake'
import Carrito from './components/Carrito'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/inicio" element={<Header/>}/>        
        <Route path="/tortas" element={<Tortas/>}/>
        <Route path="/porciones" element={<Porciones/>}/>
        <Route path="/cupcake" element={<Cupcake/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </Router>
  )
}

export default App
