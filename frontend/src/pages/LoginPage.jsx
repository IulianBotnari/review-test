import { useState } from "react";


export default function LoginPage() {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')




    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })

            })

            const data = await response.json()
            if (data.token) {
                console.log(data.token);

                localStorage.setItem('token', data.token)

                alert("Login successful")
            } else {
                throw new Error('No token')
            }
        }
        catch (err) {
            alert('Login fallito')
        }
    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"

                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"

                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>

    )
}