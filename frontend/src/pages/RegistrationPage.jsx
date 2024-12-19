import { useState } from 'react'

export default function RegistrationPage() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleRegistration = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://127.0.0.1:3000/register', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email, username, password })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <form onSubmit={handleRegistration}>
                <div className="mb-3">
                    <label forhtml="InputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label forhtml="InputUser" className="form-label">Username</label>
                    <input type="text" className="form-control" id="InputUser" aria-describedby="textHelp" onChange={(e) => setUsername(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your user with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label forhtml="InputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>

    )
}