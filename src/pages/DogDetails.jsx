import { useLocation } from 'react-router-dom';
import style from './DogDetails.module.scss'
import { useNavigate } from 'react-router-dom';

function DogDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const dog = location.state.data;

    return ( 
        <section className={style.dogDetails}>
            <button onClick={() => navigate(-1)}>Back</button>
            <img src={dog.img}/>
            <h1>{dog.name}</h1>
            <p>{dog.breed}</p>
            <p>Owner: {dog.owner.name}</p>
        </section>
     );
}

export default DogDetails;