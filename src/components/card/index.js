import './style.scss'
import testImg from '../../assets/harrypotter.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as regularBookmar  } from '@fortawesome/free-solid-svg-icons'
import { faBookmark  } from '@fortawesome/free-regular-svg-icons'



const Card = () => {

    
    return (
        <div className="card">
            <div className="cardLeft">
                <img src={testImg}/>
            </div>
            <div className="cardRight">
                <div style={{margin: 20}}>
                    <FontAwesomeIcon icon={faBookmark}  pull="right" size="lg" />
                    <div className='status'><span>VIVO / ESTUDIANTE</span></div>
                    <div className='name'><span>Harry Potter</span></div>
                    <div className='dataCharacter'>
                        <div><span><b>Cumpleaños: </b></span><span>31-07-1980</span></div>
                        <div><span><b>Género: </b></span><span>Male</span></div>
                        <div><span><b>Color de ojos: </b></span><span>Green</span></div>
                        <div><span><b>Color de pelo: </b></span><span>Black</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;