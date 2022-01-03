import React from 'react'
import { useState, useEffect } from 'react'
import Create from '../component/Create'
import ItemList from '../component/ItemList'
import { getProducts } from '../services/api'

const Main = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
            .then(res => res.json())
            .then(res => setData(res))
            .finally(() => setLoading(false))
            .catch(error => console.log(error));
    }, [])

    const array = Object.entries(data)

    return (
        <div >

            {loading ? <h1>Cargando...</h1>
                :
                <div className='main-cont'>
                    <ItemList products={array} />
                    <Create />
                </div>}




        </div>
    )
}

export default Main


