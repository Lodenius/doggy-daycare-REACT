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
                    <section className={style.dogCard__info__nameage}>
                        <h2>{data.name}</h2>
                        <h3>{data.age}y/o</h3>
                    </section>
                    <section className={style.dogCard__info__sexbreed}>
                        <p>{data.sex}</p>
                        <p>{data.breed}</p>
                    </section>
                    <p className={style.dogCard__info__owner}>Owner: {data.owner.name}</p>
                </section>
            </article>
        </NavLink>
     );
}

export default DogCard;