import './menu.css';

export const Menu = () =>{
    return(
        <nav className="menu">
            <ul>
                <li className="menu-li"><a  href="#">Home</a></li>
                <li className="menu-li"><a href="#">Portifólio</a></li>
                <li className="menu-li"><a href="#">Contato</a></li>
                <li className="active"><a href="admin">LOGIN</a></li>
                <li className="menu-li passivo"><a href="">Leandro Gay</a></li>
            </ul>
        </nav>
    )
}
