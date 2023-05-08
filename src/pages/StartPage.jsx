import { useNavigate } from "react-router-dom";
import style from './StartPage.module.scss'

function StartPage() {
    const navigate = useNavigate();

    return ( 
        <main className={style.startPage}>
            <h1>Welcome to Doggy Daycare</h1>
            <button onClick={() => navigate('/ourdogs')}>OUR DOGS</button>
        </main>
     );
}

export default StartPage;