import './App.css'
import Navbar from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ForHim from './pages/ForHim.jsx'
import ForHer from './pages/ForHer.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'


export default function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/forHim" element={<ForHim />}></Route>
      <Route path="/forHer" element={<ForHer />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
     
    </BrowserRouter> 
    </>
  )
}
