

export default function RegistrationPage() {


    return (
        <>
            <form>
                <div className="mb-3">
                    <label forhtml="InputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label forhtml="InputUser" className="form-label">Username</label>
                    <input type="text" className="form-control" id="InputUser" aria-describedby="textHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your user with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label forhtml="InputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>

    )
}