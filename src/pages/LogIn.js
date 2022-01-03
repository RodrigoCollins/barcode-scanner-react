import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { getAccess } from '../services/api'



const LogIn = () => {

    const [response, setResponse] = useState()

    const [values, setValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })
    const [storedValue, setValue] = useLocalStorage('token', '')

    const { email, password } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        getAccess(email, password)
            .then(res => res.json())
            .then(res => setValue(res.idToken))
            .then(res => setResponse(res))
            .finally(window.location.reload(false))
            .catch(error => console.log(error))

    }
    console.log(email, password)
    console.log(storedValue)
    console.log(response)

    return (
        <div className='auth-login'>
            <div className='auth-container'>
                <h3 className='auth-title'>Login</h3>
                <form className='input-container'>
                    <input
                        required
                        type="text"
                        placeholder='email'
                        name='email'
                        className='auth-input'
                        value={email}
                        onChange={handleInputChange}
                    />
                    <input
                        required
                        type="password"
                        placeholder='password'
                        name='password'
                        className='auth-input'
                        value={password}
                        onChange={handleInputChange}
                    />
                    <button type='submit' className='auth-btn' onClick={handleSubmit}> <Link to='/' className='item-link'> Ingresar</Link> </button>

                </form>
            </div>

        </div>
    )
}

export default LogIn
