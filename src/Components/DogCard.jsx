import { NavLink } from "react-router-dom";
import styles from './dogCard.module.css'

function DogCard({data}) {
    return ( 
        <NavLink to='/dogdetails' state={{data: data}}>
            <article className={styles.card}>
                <div className={styles.figure}>
                    <img src={data.img} className={styles.img}/>
                </div>
                <section className={styles.info}>
                    <h2>{data.name}</h2>
                    <h2>{data.age}y/o</h2>
                </section>
                <section className={styles.info}>
                    <p>{data.sex}</p>
                    <p>{data.breed}</p>
                </section>
                <p>Owner: {data.owner.name}</p>
            </article>
        </NavLink>
     );
}

export default DogCard;