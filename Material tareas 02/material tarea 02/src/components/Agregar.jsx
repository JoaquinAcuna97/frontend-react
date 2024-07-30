import React from 'react'

function Agregar() {
    return (
        <div className="agregar">
            <label htmlFor="txtAgregar">Agregar:</label>
            <input type="text" name="txtAgregar" id="txtAgregar" />
            <input type="button" value="Agregar" />
        </div>
    )
}
export default Agregar