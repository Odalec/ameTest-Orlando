import Card from '../card'
import './style.scss'

const CardContainer = () =>{
    return (
        <div className="container">
            <div className="filtro">
                <span>Selecciona tu filtro</span>
            </div>
            <div className="btnFiltro">
                <button>ESTUDIANTES</button>
                <button>STAFF</button>
            </div>
            <div className="cardContainer">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default CardContainer;