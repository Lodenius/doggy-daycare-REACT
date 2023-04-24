import { useSelector } from 'react-redux';
import styles from './dogs.module.css'
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
        <section>
            <h1  className={styles.ourDogsH1} onClick={() => navigate(-1)}>Our Dogs</h1>
            <button className={styles.button} onClick={() => setFilteredDogs(ourDogs)}>Show all dogs</button>
            <button className={styles.button} onClick={filterDogs}>Present dogs</button>
            <section className={styles.doggyPage}>
            {
                filteredDogs.map((dog, i) => <DogCard key={i} data={dog}/>)
            }
        </section>
        </section>
     );
}

export default OurDogs;