import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import {Contact} from './pages/Contact';
import {About} from './pages/About';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Navbar } from './layout/Navbar';
import { Linkedin } from './pages/Linkedin';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/linkdin' element={<Linkedin/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
