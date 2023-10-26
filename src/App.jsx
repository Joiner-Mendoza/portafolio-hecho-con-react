import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { Home } from './Home';
import { About } from './About'; // Ruta de importación corregida
import { Skills } from './Skills';
import { Cont } from './Cont';

function App() {
  return (
    <>
      <HashRouter>

         <Menu />
            
              <Routes>

                  <Route path="/Home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/cont" element={<Cont />} />
                  <Route path="*" element={<p>Not Found</p>} />
                  
              </Routes>

      </HashRouter>
    </>

    
  );
}

export default App;
