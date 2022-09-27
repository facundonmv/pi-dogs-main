import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getDogs, getTemperaments, orderAlpha, filterTemp, filterWeight, filterCreated } from "../action";
import {Link} from "react-router-dom"
import Card from "./Card";
import Paginado from "./Paginado";
import './styles/Home.css'

export default function Home(){
    const allTemp = useSelector((state) => state.temperament)
const dispatch = useDispatch()
const allDogs = useSelector((state) => state.dogs)


const [pagina, setPagina] = useState(1)
const [porPagina, setPorPagina] = useState(8)
const maximo = allDogs.length / porPagina


const [orden, setOrden] = useState("");


function handleFilterCreated(e) {                       
  e.preventDefault();                             
  dispatch(filterCreated(e.target.value));     
}                                                   

const handleSelect = (e) => {
    e.preventDefault();
    dispatch(orderAlpha(e.target.value))
    setOrden(`Ordenado ${e.target.value}`);
  };

useEffect(() => {
    dispatch(getDogs())
},[dispatch])
useEffect(()=>{
    dispatch(getTemperaments())
},[dispatch]);
const handleClick = (e) => {
    e.preventDefault()
    dispatch(getDogs())
}
const handleWeight = (e) => {
    e.preventDefault();
    dispatch( filterWeight(e.target.value) );
    setOrden(`Ordenado ${e.target.value}`)
  }
  function handleFilterByTemp(e){
    e.preventDefault();
    dispatch(filterTemp(e.target.value));
  }

    return(
        <div className="containerHome">

         <div className="homeRefresh">
         <Link onClick={(e) => {handleClick(e)}} className="linkRefresh">Refresh</Link>
            </div>
            
            <div >
                <select onChange={(e) => {handleSelect(e)} } className="homeFiltros">
                    <option disabled defaultValue className="homeFiltros">Sorted By</option>
                    <option value="az" className="homeFiltros">A-Z</option>
                    <option value="za" className="homeFiltros">Z-A</option>
                </select>
                <select className="homeFiltros2"  defaultValue='ft' onChange={ handleWeight }>
                <option disabled defaultValue>Order by Weight</option>
              <option value="Weight 1">Small</option>
              <option value="Weight 2">Big</option>
        </select>
        <select onClick={(e) => handleFilterCreated(e)} className="homeFiltros3">
        <option value="Source">Source</option>
          <option value="All">All Dogs</option>
          <option value="Created">Created by You!</option>
        </select>
        <select  onClick={(e) => handleFilterByTemp(e)} className="homeFiltros4">
            <option  value="">Filter by Temperament</option>
            {allTemp.map((temp) => (
              <option key={temp.id} value={temp.name}>{temp.name}</option>
            ))}
          </select>
          </div>

 <div className="homeCard">
{
allDogs?.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map(el => {
  return (
    <div>
      <Link to={"/dogs/" + el.id}>
<Card 
name={el.name} 
image={el.image} 
temperament={
    el.temperament
    ? el.temperament
    : el.temperaments && el.temperaments.map((temp) => temp.name.concat(" "))
}
key={el.id}
weight={el.weight}
/>
</Link>
</div>
);
})}
</div>
<div className="homePaginado">               
<Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
</div>
</div>
    )
}