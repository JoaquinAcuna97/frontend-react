import React from 'react'
import Agregar from './Agregar'
import Tarjetas from './Tarjetas'

function Contenido() {
    return (
        <div className="contenido">
            <Agregar></Agregar>
            <Tarjetas></Tarjetas>
        </div>
    )
}

export default Contenido