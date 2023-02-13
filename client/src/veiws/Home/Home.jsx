import React, { useState } from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import Cards from '../../components/Cards/Cards'
import {getAllCountries,orderByName,filterByContinent,getActivities,filterCreated, orderByPopulation} from "../../redux/actions"
import SearchBar from '../../components/SearchBar/SearchBar'
import Paginado from '../../components/Paginado/Paginado'
import style from './Home.module.css';


 const Home = () => {

  const activities = useSelector(state=> state.activities)
  const allCountries  = useSelector( state => state.countries)
  let dispatch = useDispatch()

  
const [currentPage, setCurrentPage] = useState(1) // empiezo en la pag 1
const countriesPerPage1 = 9;
const [countriesPerPage, setCountriesPerPage] = useState(countriesPerPage1); //pag1: 9 countries, pag2 en adelante: 10 countries
//const [order, setOrder] = useState('')
let indexOfLastCountry;
let indexOfFirstCountry;
let currentCountries;

//const countriesPerPage=10;
const countriesPerPage2 = 10;
if (countriesPerPage === 9) {
  indexOfLastCountry = currentPage * 9;
  indexOfFirstCountry = indexOfLastCountry - 9;
  //currentCountries = countriActiv.slice(
  currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
}

if (countriesPerPage === 10) {
  indexOfLastCountry = currentPage * 10;
  indexOfFirstCountry = indexOfLastCountry - 10;
//  currentCountries = countriActiv.slice(
  currentCountries = allCountries.slice(
    indexOfFirstCountry - 1,
    indexOfLastCountry - 1
  );
}
const paginado = (pageNumber) => {
  setCurrentPage(pageNumber);
  if (pageNumber >= 2) {
    setCountriesPerPage(countriesPerPage2);
  }
  console.log(countriesPerPage);
  if (pageNumber === 1) {
    setCountriesPerPage(countriesPerPage1);
  }
};


  useEffect(()=>{
    dispatch(getAllCountries());
    dispatch(getActivities())
},[dispatch])


function handleSelect (e){
  e.preventDefault();
  dispatch(filterCreated(e.target.value)) 
  setCurrentPage(1)
  };

function handleFilterContinent(e) {
  dispatch(filterByContinent(e.target.value))
  setCurrentPage(1);
}

function handleSortName(e){
  e.preventDefault();
  dispatch(orderByName(e.target.value));
  setCurrentPage(1);

}
const handleChange = (e) => {
  dispatch(orderByPopulation(e.target.value))
  
} 

  return (
    <>
    <div>
    <SearchBar/>
    </div>
<br />
                    {/* Filter by name */}
    <div className={style.selectOne}>
    <select onClick={(e) => handleSortName(e)}>
            <option value="">Order by Alphabet</option>
            <option value="AZ">A - Z</option>
            <option value="ZA">Z - A</option>
    </select>
    </div>
              {/* Filter population */}
    <div className={style.selectOne}>
        <select onChange={handleChange} name="countries" id="countries">
            <option value="">Order by Population</option>
            <option value="minPopulation">Min Population</option>
            <option value="maxPopulation">Max Population</option>
        </select>
    </div>

                {/* Filter by Continent */}
                <div className={style.select}>
                <select onClick={(e) => handleFilterContinent(e)}>
                    <option>Filter by Continent</option>
                    <option value='Europe'>Europe</option>
                    <option value='Asia'>Asia</option>
                    <option value='North America'>North America</option>
                    <option value='South America'>South America</option>
                    <option value='Africa'>Africa</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Antarctica'>Antartida</option>
                </select>
                </div>
                  {/* Filter Activities */}
                <div className={style.select}>
                    <select onChange={(el)=>handleSelect(el)}>
                    <option value ='sin filtros '>Sin Filtrar</option>
                        {activities.map((act)=>(
                    <option value={act.name}>{act.name}</option>
                     ))}
                    </select>
                </div>
                <br />
    <div>
    <Link to='/activity'><button className={style.button}>Crea tu Actividad</button></Link>
    </div>
    <hr />
    <div>
     <div className={style.container}>       
                {
                    currentCountries && currentCountries.map(c => 
                        <Cards id={c.id} image={c.flags} name={c.name} continents={c.continents}/>
                      
                    )
                }
            </div>
            </div>
    <div>
    <Paginado countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginado={paginado}/>
    </div>
    </>
  )
}

export default Home;