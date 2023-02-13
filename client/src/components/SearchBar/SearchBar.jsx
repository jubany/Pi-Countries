import React,{useState} from 'react'
import { useDispatch} from "react-redux"
import { getCountriesByName } from '../../redux/actions';
import style from './SearchBar.module.css';

function SearchBar() {

  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const handlechange = (e) => {
    setName(e.target.value)
  }
  const handleClick = () => {
    dispatch(getCountriesByName(name))
  }
  return (
    <div className={style.searchBar}>
        <input onChange={handlechange} type="tex" placeholder="Search your Country"/>
        <button onClick={handleClick} className={style.btnPrimary} >Search</button>
    </div>
  )
}

export default SearchBar;