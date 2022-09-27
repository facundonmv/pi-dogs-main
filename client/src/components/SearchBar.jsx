import React from 'react'
import { useState } from "react";
import { useDispatch} from "react-redux"
import {getSearch} from '../action/index'
import './styles/SearchBar.css'


function SearchBar() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getSearch(input))
    }

    const handleOnChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
        dispatch(getSearch(e.target.value))
    }
    

    return (
        <div className='box'>
        <form onSubmit = {(e) => handleSubmit(e)} id = "mySearch">
        <input type = "text" placeholder = "Search..." onChange = {handleOnChange} className="inputSearch"/>
        <input type= "submit" name='' value="Search" className='inputSubmit'/>
        </form>      
        </div>
)
    }

    export default SearchBar;