import React from 'react'
import LogIn from './LogIn'
import Main from './Main'


const Home = () => {


    const token = localStorage.getItem('token')



    return (
        <div>
            {token ? <Main /> : <LogIn />}
        </div>
    )
}

export default Home
