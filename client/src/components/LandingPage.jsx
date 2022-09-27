import React from "react";
import {Link} from 'react-router-dom';
import './styles/LandingPage.css'
import image1 from '../images/image1.png'
import image2 from '../images/image4.png'
import image3 from '../images/image5.png'
import image4 from '../images/image63.png'

export default function LandingPage(){

    return(
      <main className="containerLanding">
      <section class="main-header">
        <div className="containerImg">
      <img src={image1} alt="imgnotfound" className="imgLanding" />
      <img src={image2} alt="imgnotfound" className="imgLanding2" />
      <img src={image3} alt="imgnotfound" className="imgLanding3" />
      <img src={image4} alt="imgnotfound" className="imgLanding4" />
      </div>
      <div class="main-text">
        <h1>HELLO, WE WELCOME YOU TO DOGS </h1>
        <p>Here you will be able to find all the information about dog breeds.</p>
        <div class="main-btn">
          <Link to={'/home'} class="btn">see all breeds</Link>
        </div>
      </div>
    
    </section>
    </main>
    )
}