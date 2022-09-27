import React from "react";
import { useState } from "react";
import './styles/Paginado.css'


export default function Paginado({pagina, setPagina, maximo}){
    const [input, setInput] = useState(1)
    const nextPage = () => {
        setInput(input + 1)
        setPagina(pagina + 1)
    }
    const previousPage = () => {
        setInput (input -1)
        setPagina(pagina - 1)
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            setPagina(parseInt(e.target.value))
            if(parseInt(e.target.value < 1 || 
                parseInt(e.target.value) < Math.ceil(maximo)) || 
                isNaN(parseInt(e.target.value))){
                    setPagina(1)
                    setInput(1)
            } else{
                setPagina(parseInt(e.target.value))
            }
        }
    }

const onChange = (e) =>{
    setInput(e.target.value)
}

    return(
        <div className="containerPaginado">
                        <button disabled={pagina === 1 || pagina < 1} onClick={previousPage} className='button1'>        
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m32.75 44-20-20 20-20 2.8 2.85L18.4 24l17.15 17.15Z"/></svg>
        </button>
                      <button onClick={nextPage} className='button2'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m15.3 43.65-2.7-2.75 17.05-17L12.6 6.85l2.7-2.75 19.75 19.8Z"/></svg>
                    </button>
 



            <input onChange={(e) => {onChange(e)}}  onKeyDown={(e) => {onKeyDown(e)}} name="page" type="text" value={input}
            className="inputPaginado"/>
                 <a className="inputPaginado2"> of {maximo}</a>





        </div>
    )
}