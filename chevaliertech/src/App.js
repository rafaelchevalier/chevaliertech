import {useState} from 'react';
import {Banner} from './componentes/banner/Banner';
import {Home} from './componentes/home/Home';
import {Portifolio} from './componentes/portifolio/portifolio';
import {Contato} from './componentes/contato/contato';
import {Login} from './componentes/login/login';



import './App.css';

/* Variaveis Menu */
let classeMenuHome = "menu-li";
let classeMenuPortifolio = "menu-li";
let classeMenuContato = "menu-li";
let classeMenuLogin = "menu-li";
  console.log(classeMenuHome);
/* Fim Variaveis Menu */

function App() {
  /* Inicio funções Menu */
  const [home,setHome] = useState(false);
  const [portifolio,setPortifolio] = useState(false);
  const [contato,setContato] = useState(false);
  const [login,setLogin] = useState(false);  
  

  function clickHome(){
    setHome(true); 
    setPortifolio(false);
    setContato(false);
    setLogin(false);

  classeMenuHome = "active";
  classeMenuPortifolio = "menu-li";
  classeMenuContato = "menu-li";
  classeMenuLogin = "menu-li";
}
function clickPortifolio(){
  setHome(false); 
  setPortifolio(true);
  setContato(false);
  setLogin(false);

  classeMenuHome = "menu-li";
  classeMenuPortifolio = "active";
  classeMenuContato = "menu-li";
  classeMenuLogin = "menu-li";
}
function clickContato(){
  setHome(false); 
  setPortifolio(false);
  setContato(true);
  setLogin(false);

  classeMenuHome = "menu-li";
  classeMenuPortifolio = "menu-li";
  classeMenuContato = "active";
  classeMenuLogin = "menu-li";
}
function clickLogin(){
  setHome(false); 
  setPortifolio(false);
  setContato(false);
  setLogin(true);

  classeMenuHome = "menu-li";
  classeMenuPortifolio = "menu-li";
  classeMenuContato = "menu-li";
  classeMenuLogin = "active";
}
  /* fim funções Menu */
  
  return (
    <div className="App">
      <header className="">
      <div className="content_menu">
            <nav className="menu">
                <ul>
                    <li className={classeMenuHome} ><a className="a_button" onClick={clickHome} >Home</a></li>
                    <li className={classeMenuPortifolio}><a className="a_button" onClick={clickPortifolio} >Portifólio</a></li>
                    <li className={classeMenuContato}><a className="a_button" onClick={clickContato}>Contato</a></li>
                    <li className={classeMenuLogin}><a className="a_button" onClick={clickLogin}>LOGIN</a></li>
                </ul>
            </nav>
      </div>
        
      </header>
      <body>
        <div><Banner /></div>
        {home && (<div><Home /></div>)}
        {portifolio && (<div><Portifolio /></div>)}
        {contato && (<div><Contato /></div>)}
        {login && (<div><Login /></div>)}
      </body>
    </div>
  );
}

export default App;
