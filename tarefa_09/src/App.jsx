
import './App.css'
import Header from './components/Layout/Header'
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import { Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
