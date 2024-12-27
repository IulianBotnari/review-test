import { useState } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalContext";
import Style from './LoginPage.module.css'


export default function LoginPage() {
    const { setLogged, setUsername, username } = useGlobalContext()


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
                setLogged('true')

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


            <div className={` ${Style.container}`}>

                <div className={`${Style.form_container}`}>

                    <h2>Effettual il login per favore</h2>

                    <form className={`mt-5 ${Style.card}`} onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            className="form-control my-2"

                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control my-2"

                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="btn btn-secondary" type="submit">Login</button>
                    </form>


                </div>
            </div>
        </>

    )
}