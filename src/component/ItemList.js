import React, { useState, useEffect } from 'react'
import Item from './Item'
import './Item.css'


const ItemList = ({ products }) => {

    const categorias = ['todos', ...new Set(products.map(item => item[1].categoria))]
    const [category, setCategory] = useState('')
    const [data, setData] = useState(products)



    useEffect(() => {
        try {
            if (category === '' || category === 'todos') {
                setData(products)
            }
            else {
                setData(products.filter(prods => prods[1].categoria === category))
            }

        } catch (error) {
            console.log(error)
        }

    }, [category, products])

    console.log(data)

    return (
        <div className='itemlist-cont'>
            <h1>Productos</h1>
            {categorias.map((categoria, i) => <button key={i} onClick={() => setCategory(categoria)}>{categoria}</button>)}
            <hr />
            <div className='itemlist'>
                {data.map(prod => <Item key={prod[0]} prod={prod} />)}
            </div>
        </div>
    )
}

export default ItemList
