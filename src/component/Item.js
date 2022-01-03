import React from 'react'
import { deleteProduct } from '../services/api'

const Item = ({ prod }) => {

    const deleteItem = (id) => {
        deleteProduct(id)
            .then(res => res.json())
            .then(res => console.log(res))
            .then(alert('eliminado con exito'))
            .finally(window.location.reload(false))

    }

    return (
        <div className='item'>
            <h2 className='item-title'>{prod[1].nombre}</h2>
            <h3 className='item-title'>{prod[1].categoria}</h3>
            <h5 className='item-title'>{prod[1].descripcion}</h5>
            <p className='item-title'>${prod[1].precio}</p>
            <button className='item-btn' onClick={() => deleteItem(prod[0])}>Eliminar</button>
        </div>
    )
}

export default Item
