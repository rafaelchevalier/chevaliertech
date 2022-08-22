import {useState} from 'react';
import { Banner } from '../banner/Banner';
import {Home} from '../home/Home';
import './menu.css';

export const Menu = () =>{
    const [home,setHome] = useState();
    const [banner,setBanner] = useState();
    const [portifolio,setPortifolio] = useState();
    const [contato,setContato] = useState();
    const [login,setLogin] = useState();


function clickHome(){
    setHome(!home); 
}
function clickBanner(){
    setBanner(!banner); 
}
    return(
        <div className="content_menu">
            <nav className="menu">
                <ul>
                    <li className="menu-li" ><button type="button" onClick={clickHome} >Home</button></li>
                    <li className="menu-li" ><button type="button" onClick={clickBanner} >Banner</button></li>
                    <li className="menu-li"><a href="#">Portifólio</a></li>
                    <li className="menu-li"><a href="#">Contato</a></li>
                    <li className="active"><a href="admin">LOGIN</a></li>
                </ul>
            </nav>
            
            {banner && (
                <div>
                <Banner />
                </div>
            )}
            
            
            {home && (
                <div>    
                <Home />
                </div>
            )}
            
            
            
        </div>
        
    )
}

