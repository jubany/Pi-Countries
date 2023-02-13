import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getById } from '../../redux/actions';
import{Link} from "react-router-dom"
import style from './Details.module.css'

export const Details = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const country = useSelector(state => state.detail)

    useEffect(()=> {
        dispatch(getById(id))

    },[dispatch,id]);

  return (
    <>
        <div className={style.container}>
        <div className={style.card}>
        <div className={style.imgContainer}>
          <img className={style.img} src={country.flags} alt={country.name}/>
          </div>
          <div className={style.infoContainer}>
          <h1 className={style.title}>{country.name}</h1>
          <h3 className={style.subtitle}>Continent: {country.continents}</h3>
          <h3>Capital: {country.capital}</h3>
          <h3>subregion: {country.subregion}</h3>
          <h3>area: {country.area}</h3>
          <h3>population: {country.population}</h3>
        </div>
        <div>
          <h4 className={style.activities}>Activities</h4>
          <ul>
            {country.activities &&
              country.activities.map((act) => (
                <li key={act.id}>
                  <p>
                    <strong>{act.name}</strong> ({act.season}) | Duration:{' '}
                    {act.duration} - Dificult: {act.dificult}
                  </p>
                </li>
              ))}
          </ul>
          <Link to="/home"><button  className={style.btn}>Back Home</button></Link>
        </div>
        </div>
        </div>
    </>
  )
}

export default Details;