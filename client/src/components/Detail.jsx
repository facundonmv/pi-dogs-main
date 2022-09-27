import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react";
import { getId } from '../action/index'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom';
import './styles/Detail.css'


export default function Detail(props){
    const dispatch = useDispatch()

    let dog = useSelector((state) => state.detail)
    
    const {id} = useParams()

    useEffect(() => {
        dispatch(getId(id))
    }, [dispatch, id])
return(
<div className="Detail">
{
    dog? 
    <div className="cardDetail">
            <img src={dog.image} alt="" className="imgDetail"/>

        <div className="contentDetail">
            <div className="titleDetail">
                <h1>{dog.name}</h1>
            </div>
            <div className="textDetail">
                <p>weight: {dog.weight}</p>
                <p>height: {dog.height}</p>
                <p>life span: {dog.life_span}</p>
                <p> Temperaments: {!dog.createdInDb? dog.temperaments + " " : dog.temperaments.map(el => el.name + (", "))}</p>
            </div>
            <div >
                <Link to={'/home'} className="btnDetail">To home</Link>
            </div>
        </div>
        
        
    </div>
    : <h2>Loading</h2>
}


</div>
)

}