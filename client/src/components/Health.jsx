import React from "react";
import './styles/Health.css'
import parvovirus from '../images/parvovirus.png'
import moquillo from '../images/moquillo.png'
import diarrea from '../images/diarrea.png'
import leptospirosis from '../images/leptospirosis.png'
import rabia from '../images/rabia.png'
import otitis from '../images/otitis.png'
import mastitis from '../images/mastitis.png'
import sarna from '../images/sarna.png'

export default function Health(){

return(

    <div className="containerHealth"> 
    <div className="containerCardHealth">
    <div className="cardHealth">
<div className="faceHealth frontHealth">
    <img src={parvovirus} alt="" />
    <h3>Parvovirus</h3>
</div>
<div className="faceHealth backHealth">
    <h3>Parvovirus</h3>
    <p>It is a serious, highly contagious infection caused by a virus that mainly affects the gastrointestinal tract in adult dogs, puppies and other wild canids. </p>
</div>
</div>
<div className="cardHealth">
<div className="faceHealth frontHealth">
    <img src={moquillo} alt="" />
    <h3>Distemper</h3>
</div>
<div className="faceHealth backHealth">
    <h3>Distemper</h3>
    <p>It is a highly contagious disease caused by a virus that affects the respiratory, gastrointestinal, and often the nervous system of puppies and adult dogs.</p>
</div>
</div>
<div className="cardHealth">
<div className="faceHealth frontHealth">
    <img src={diarrea} alt="" />
    <h3>Diarrhea</h3>
</div>
<div className="faceHealth backHealth">
    <h3>Diarrhea</h3>
    <p>It is an increase in fecal water content, with an associated increase in stool volume and frequency. The intestinal tract is a complex system with a wide variety of functions ranging from digestion to nutrient absorption.</p>
</div>
</div>
<div className="cardHealth">
<div className="faceHealth frontHealth">
    <img src={leptospirosis} alt="" />
    <h3>Leptospirosis</h3>
</div>
<div className="faceHealth backHealth">
    <h3>Leptospirosis</h3>
    <p>It is a bacterial disease of dogs that can have very serious consequences in pets and can also be transmitted to people. This disease is caused by a spirochete bacterium called Leptospira.</p>
</div>
</div>
<div className="cardHealth">
<div className="faceHealth frontHealth">
    <img src={rabia} alt="" />
    <h3>Rabia</h3>
</div>
<div className="faceHealth backHealth">
    <h3>Rabia</h3>
    <p>It is a viral disease that is deadly but preventable.  It can spread to people and pets if they are bitten or scratched by a rabid animal.</p>
</div>
</div>
<div className="cardHealth">
<div className="faceHealth frontHealth">
    <img src={otitis} alt="" />
    <h3>Otitis</h3>
</div>
<div className="faceHealth backHealth">
    <h3>Otitis</h3>
    <p>It is an inflammation of the ear canal that is usually caused by an infection, although it can also appear without it or even cause it.</p>
</div>
</div>
<div className="cardHealth">
<div className="faceHealth frontHealth">
    <img src={mastitis} alt="" />
    <h3>Mastitis</h3>
</div>
<div className="faceHealth backHealth">
    <h3>Mastitis</h3>
    <p>This inflammation in the breast tissue can cause pain, heat, redness, fever and even chills. In addition, sometimes it can also cause infection and alter the shape of the nipple or breasts.</p>
</div>
</div>
<div className="cardHealth">
<div className="faceHealth frontHealth">
    <img src={sarna} alt="" />
    <h3>Scabies</h3>
</div>
<div className="faceHealth backHealth">
    <h3>Scabies</h3>
    <p>It is an itchy skin disorder caused by tiny scabies mites called Sarcoptes scabiei. Intense itching occurs in the area where the mite is burrowing.</p>
</div>
</div>
</div>
        </div>
)
}