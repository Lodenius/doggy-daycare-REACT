import { useSelector } from 'react-redux';
import style from './OurDogs.module.scss'
import DogCard from '../Components/DogCard';
import FilterDogs from '../Components/FilterDogs';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function OurDogs() {
    const navigate = useNavigate();
    const ourDogs = useSelector((state) => {
        return state.dogs
    });
    
    const [filteredDogs, setFilteredDogs] = useState(ourDogs);
    const present = true;

    const filterDogs = useCallback(() => {
        const result = FilterDogs(ourDogs);
        setFilteredDogs(result);
    }, [ourDogs, present])

    return ( 
        <section className={style.ourDogs}>
            <h1 onClick={() => navigate(-1)}>Our Dogs</h1>
            <button onClick={() => setFilteredDogs(ourDogs)}>Show all dogs</button>
            <button onClick={filterDogs}>Present dogs</button>
            <section className={style.ourDogs__cards}>
            {
                filteredDogs.map((dog, i) => <DogCard key={i} data={dog}/>)
            }
        </section>
        </section>
     );
}

export default OurDogs;