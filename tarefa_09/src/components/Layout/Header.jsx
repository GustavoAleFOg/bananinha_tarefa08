import Styles from './Header.module.css'
import Foto from '../../assets/image.webp'



function Header() {
    return(
        
        <div className={Styles.Header}>
        <img src={Foto}/>
            <h1>Joguinho do roblox</h1>
        </div>
    )
}

export default Header;

