import React from 'react'
import { Link } from 'react-router-dom'
import style from './Cards.module.css'

const Cards = (props) => {
  const {name, image, continents,id } = props
  return (
    <>
        <Link to={`/country/${id}`}>
          <div className={style.container}>
              <img src={image} alt={name} />
              <div>
                <h1 className={style.tamaño}>{name}</h1>
                <h3>{continents}</h3>
              </div>
          </div>
          </Link>
     </>
    
  )
}

export default Cards;