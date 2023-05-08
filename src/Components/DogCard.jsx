import { NavLink } from "react-router-dom";
import style from './DogCard.module.scss'

function DogCard({data}) {
    return ( 
        <NavLink to='/dogdetails' state={{data: data}}>
            <article className={style.dogCard}>
                <div className={style.dogCard__figure}>
                    <img src={data.img}/>
                </div>
                <section className={style.dogCard__info}>
                    <h2>{data.name}</h2>
                    <h2>{data.age}y/o</h2>
                </section>
                <section className={style.dogCard__info}>
                    <p>{data.sex}</p>
                    <p>{data.breed}</p>
                </section>
                <p>Owner: {data.owner.name}</p>
            </article>
        </NavLink>
     );
}

export default DogCard;