import { useNavigate } from "react-router-dom";
import styles from './dogs.module.css'

function StartPage() {
    const navigate = useNavigate();

    return ( 
        <main>
            <h1>Welcome to Doggy Daycare</h1>
            <button className={styles.button} onClick={() => navigate('/ourdogs')}>OUR DOGS</button>
        </main>
     );
}

export default StartPage;