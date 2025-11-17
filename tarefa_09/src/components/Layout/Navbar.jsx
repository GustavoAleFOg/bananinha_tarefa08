import { Link } from 'react-router-dom';
import Styles from './NavBar.module.css';
function Navbar() {
    return (

        
        <nav className={Styles.Header}>
            <ul className={Styles.list}>
                <li className={Styles.item}><Link to="/">Home</Link></li>
                <li className={Styles.item}><Link to="/empresa">Empresa</Link></li>
                <li className={Styles.item}><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;