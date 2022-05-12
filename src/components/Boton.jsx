import React from 'react'
import '../styles/Boton.css'

export default function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <div>
        <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
        onClick={manejarClic}>

            {texto}
        </button>
    </div>
  )
}
