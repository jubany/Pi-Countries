import React from "react"
import {Link} from 'react-router-dom'
import style from './Landing.module.css'

export default function Landing() {
    return(
        <div className={style.landing}>
            <h2 className={style.h1}>Bienvenidos!</h2>
            <Link to={'/home'}>
            <button className={style.button}>Ingresar</button>
            </Link>
        </div>
    )
}