import React from "react";
import './styles/Card.css'
import {Link} from 'react-router-dom';

export default function Card({name, image, weight, height, temperament}){
return(
    <div className="containerCard"> 
        <div className="cardDog">
            <div className="faceDog frontDog">
            <img src={image} alt="" />
            <h3>{name}</h3>
            </div>
            <div className="faceDog backDog">
<h3>{name}</h3>
<p>weight: {weight}</p>
<p>height: {height}</p>
<p>{temperament}</p>
<div className="linkDog">
    <Link>Details</Link>
</div>
</div>
        </div>
        </div>
)
}