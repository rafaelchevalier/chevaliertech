import {useState} from 'react';
import { Banner } from './componentes/banner/Banner';
import { Menu } from './componentes/menu/Menu';
import {Home} from './componentes/home/Home';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="banner">
        <Menu />
        <Banner />
      </header>
      <body>
      { clickHome() &&(
          <Home />      
      )}
          
        
        
      </body>
      
        
        
      
      
    </div>
  );
}

export default App;
