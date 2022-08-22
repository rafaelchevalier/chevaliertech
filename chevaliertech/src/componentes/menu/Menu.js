import {useState} from 'react';

import './menu.css';

export const Menu = () =>{
    const [home,setHome] = useState();
    const [portifolio,setPortifolio] = useState();
    const [contato,setContato] = useState();
    const [login,setLogin] = useState();


function clickHome(){
    setHome(!home);
    
    
}
    return(
        <div className="content_menu">
            <nav className="menu">
                <ul>
                    <li className="menu-li" ><button type="button" onClick={clickHome} >Home</button></li>
                    <li className="menu-li"><a href="#">Portifólio</a></li>
                    <li className="menu-li"><a href="#">Contato</a></li>
                    <li className="active"><a href="admin">LOGIN</a></li>
                </ul>
            </nav>
        </div>
        
    )
}

