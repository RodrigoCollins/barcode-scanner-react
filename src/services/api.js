

const tokenId = localStorage.getItem('token')

const token = JSON.parse(tokenId)


export const getAccess = (email, password) => {
    return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAGQtn7z7nfZVPKzx6Mf_Mkgyw2wo-Lhr8", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
            "returnSecureToken": true
        })
    })
}

export const getProducts = () => {

    return fetch(`https://test-lucas-594ea.firebaseio.com/products.json?auth=${token}`)
}

export const deleteProduct = (id) => {

    return fetch(`https://test-lucas-594ea.firebaseio.com/products/${id}.json?auth=${token}}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

export const createProduct = (nombre, categoria, descripcion, precio) => {

    return fetch(`https://test-lucas-594ea.firebaseio.com/products.json?auth=${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre,
            categoria,
            descripcion,
            precio
        }),
    }
    )
} 