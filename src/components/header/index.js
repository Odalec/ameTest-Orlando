import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import logoHP from '../../assets/logo.png'
import './style.scss'


const Header = () => {
    return (
        <div className="header">
            <div className="btnContainer">
                <button>FAVORITOS  <FontAwesomeIcon icon={faBookmark}  pull="right" size="lg" /></button>
                <button>AGREGAR <FontAwesomeIcon icon={faUserPlus}  pull="right" size="lg" /></button>
            </div>
            <div className="imgLogo">
                <img src={logoHP}/>
            </div>
        </div>
    )
}

export default Header;