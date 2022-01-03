import React from 'react'
import { useForm } from '../hooks/useForm'
import { createProduct } from '../services/api'
import './Item.css'

const Create = () => {

    const [values, setValues, handleInputChange] = useForm({
        nombre: '',
        categoria: '',
        descripcion: '',
        precio: ''
    })

    const { nombre, categoria, descripcion, precio } = values

    const handleOnSubmit = (e) => {
        e.preventDefault()
        createProduct(nombre, categoria, descripcion, precio)
            .then(res => res.json())
            .then(res => console.log(res))
            .finally(() => {
                setValues({
                    nombre: '',
                    categoria: '',
                    descripcion: '',
                    precio: ''
                })
                    ;
                alert('creado con exito')
                    ;
                window.location.reload(false);
            })
    }


    return (
        <div className='create-cont'>
            <h1>Agregar Productos</h1>

            <form onSubmit={handleOnSubmit} className='create-form'>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    className='create-input'
                    name='nombre'
                    type="text"
                    value={nombre}
                    onChange={handleInputChange}
                />
                <label htmlFor="categoria">Categoria:</label>
                <input
                    className='create-input'
                    name='categoria'
                    type="text"
                    value={categoria}
                    onChange={handleInputChange}
                />
                <label htmlFor="descripcion">Descripcion:</label>
                <input
                    className='create-input'
                    name='descripcion'
                    type="text"
                    value={descripcion}
                    onChange={handleInputChange}
                />
                <label htmlFor="precio">Precio:</label>
                <input
                    className='create-input'
                    name='precio'
                    type="text"
                    value={precio}
                    onChange={handleInputChange}
                />
                <button type='submit' className='create-btn'>Agregar a DB</button>

            </form>

        </div>
    )
}

export default Create
