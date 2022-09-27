import React from "react";
import {Link} from 'react-router-dom';
import './styles/NavBar.css'
import SearchBar from './SearchBar'


export default function NavBar (){
    return(
      <header>
      <Link to={'/'} class="logo">Dogs</Link>
  
      <ul class="navlist">
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/health'}>Health</Link></li>
        <li><Link to={'/training'}>Training</Link></li>
        <li><Link to={'/create'}>Create your dog</Link></li>
      </ul>

      <div class="main-btn">
       <SearchBar/>

      </div>
    </header>
    )
}

